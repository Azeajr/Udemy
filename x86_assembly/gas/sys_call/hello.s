.text
.globl  _start

_start:

        mov     $1, %rax    #System call number in rax, write
        mov     $1, %rdi    #file handle 1 ie. stdout
        mov     $message, %rsi
        mov     $13, %rdx
        syscall
        mov     $60, %rax   # System call 60 for exit
        syscall


message:
        .ascii  "Hello World\n"
