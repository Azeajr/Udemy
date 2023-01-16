defmodule DiscussWeb.CommentsChannel do
  use DiscussWeb, :channel

  @impl true
  # def join("comments:lobby", payload, socket) do
  def join(name, payload, socket) do
    # if authorized?(payload) do
    #   {:ok, socket}
    # else
    #   {:error, %{reason: "unauthorized"}}
    # end
    {:ok, %{hey: "there"}, socket}
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  @impl true
  def handle_in(name, payload, socket) do
  # def handle_in("ping", payload, socket) do
    IO.puts("+++++++")
    IO.puts(name)
    IO.inspect(payload)
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (comments:lobby).
  @impl true
  def handle_in("shout", payload, socket) do
    broadcast(socket, "shout", payload)
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
