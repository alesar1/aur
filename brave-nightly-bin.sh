#!/usr/bin/env bash

if [ -z "$BRAVE_FLAGS" ]; then
    if [[ ! (-r /proc/sys/kernel/unprivileged_userns_clone && $(< /proc/sys/kernel/unprivileged_userns_clone) == 1 && -n $(zcat /proc/config.gz | grep CONFIG_USER_NS=y) ) ]]; then
        >&2 echo "User namespaces are not detected as enabled on your system, brave will run with the sandbox disabled"
        FLAG="--no-sandbox"
    fi
fi
exec "/opt/brave.com/brave-nightly/brave-browser" "--use-gl=desktop" "$BRAVE_FLAGS" "$FLAG" "$@"
