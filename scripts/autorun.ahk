#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

URL = https://localhost:30120
Pathway = C:\Users\Primitive\Desktop\INSPRP Website

$NumpadDot::
    run, %comspec% /c node start %Pathway%
    IfWinNotExist, (%URL%) 
    {
        Run %URL%
        WinWait %URL%
        WinActivate
        Return
    }
    Else {
        WinActivate
        Return
    }
