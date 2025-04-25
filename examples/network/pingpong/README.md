# Ping-Pong example

1. *First-time only* Run `make create-network-identifiers`. This command will
   create two network identifiers in the local subdirectory `ids/`, and an alias
   file with the generated identifiers.

2. Run the Job Listener node, i.e. whereto remotely spawn a `pingpong` instance,
   by running the command `make listener`.

3. Open another terminal window and run the Job Dialer, which sets up the two
   instances of `pingpong`, with command `make dialer`.
