module Example.LSystem where

import Prelude

import Data.Maybe (Maybe(..))
import Data.Array (concatMap, foldM)
import Effect (Effect)
import Graphics.Canvas (strokePath, setStrokeStyle, lineTo, moveTo,
                        getContext2D, getCanvasElementById)
import Data.Number as Number
import Partial.Unsafe (unsafePartial)

lsystem :: forall a m s
         . Monad m
         => Array a
         -> (a -> Array a)
         -> (s -> a -> m s)
         -> Int
         -> s
         -> m s
lsystem init prod interpret n state = go init n
  where
  go s 0 = foldM interpret state s
  go s i = go (concatMap prod s) (i - 1)

data Letter = L | R | F

type Sentence = Array Letter

type State =
  { x :: Number
  , y :: Number
  , theta :: Number
  }

initial :: Sentence
initial = [F, R, R, F, R, R, F, R, R]

productions :: Letter -> Sentence
productions L = [L]
productions R = [R]
productions F = [F, L, F, R, R, F, L, F]

initialState :: State
initialState = { x: 120.0, y: 200.0, theta: 0.0 }

main :: Effect Unit
main = void $ unsafePartial do
  Just canvas <- getCanvasElementById "canvas"
  ctx <- getContext2D canvas

  let
    interpret :: State -> Letter -> Effect State
    interpret state L = pure $ state { theta = state.theta - Number.tau / 6.0 }
    interpret state R = pure $ state { theta = state.theta + Number.tau / 6.0 }
    interpret state F = do
      let x = state.x + Number.cos state.theta * 1.5
          y = state.y + Number.sin state.theta * 1.5
      moveTo ctx state.x state.y
      lineTo ctx x y
      pure { x, y, theta: state.theta }

  setStrokeStyle ctx "#000"

  strokePath ctx $ lsystem initial productions interpret 5 initialState
