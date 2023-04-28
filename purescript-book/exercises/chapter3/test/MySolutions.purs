module Test.MySolutions where

import Prelude

import Data.AddressBook (AddressBook, Entry)
import Data.List (filter, head, nubByEq, null)
import Data.Maybe (Maybe)

-- Note to reader: Add your solutions to this file

findEntryByStreet :: String -> AddressBook -> Maybe Entry
findEntryByStreet streetName = head <<< filter filterEntry
  where
  filterEntry:: Entry -> Boolean
  filterEntry e = e.address.street == streetName

findEntryByStreet' :: String -> AddressBook -> Maybe Entry
findEntryByStreet' streetName = filter (_.address.street >>> eq streetName
) >>> head

isInBook :: String -> String -> AddressBook -> Boolean
isInBook firstName lastName = (filter filterEntry) >>> not null 
  where
  filterEntry :: Entry -> Boolean
  filterEntry e = e.firstName == firstName && e.lastName == lastName

removeDuplicates :: AddressBook -> AddressBook
removeDuplicates = nubByEq getIfDuplicate
  where
  getIfDuplicate :: Entry -> Entry -> Boolean
  getIfDuplicate entry1 entry2 = 
    entry1.firstName == entry2.firstName &&
    entry1.lastName == entry2.lastName

