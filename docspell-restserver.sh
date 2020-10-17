#!/bin/sh

# https://wiki.archlinux.org/index.php/Java_package_guidelines#Java_packaging_on_Arch_Linux
for name in /usr/share/java/docspell-restserver/*.jar ; do
  CP=$CP:$name
done

exec /usr/bin/java -Dconfig.file="/etc/docspell-restserver.conf" -cp "$CP" docspell.restserver.Main "$@"
