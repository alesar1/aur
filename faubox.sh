#!/bin/sh

# use java 8
export PATH="/usr/lib/jvm/java-8-openjdk/jre/bin/:$PATH"

# set the home directory, class path and other java options
CLIENT_HOME=~
CP=/usr/share/java/faubox/FAUbox.jar
JAVA_MEM="-Xms64m -Xmx1g -XX:NewRatio=8 -XX:MinHeapFreeRatio=10 -XX:MaxHeapFreeRatio=20"

exec java $JAVA_MEM -Duser.home=$CLIENT_HOME -cp $CP de.dal33t.Start "$@"
