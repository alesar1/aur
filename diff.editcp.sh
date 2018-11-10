--- editcp.sh	2018-02-13 10:58:56.000000000 -0700
+++ editcp.sh	2018-11-10 14:14:54.374085686 -0700
@@ -1,16 +1,9 @@
 #!/bin/bash
-dirname=
+dirname=~/editcp
 appname=editcp
-
-if [ ! -f "$dirname/$appname" ]; then
-	echo "$dirname/$appname not found." 1>&2
-	echo "cd to the $appname installation directory and run ./install"
-	exit 1
-fi
-
 export LD_LIBRARY_PATH="$dirname"/lib
 export QT_PLUGIN_PATH="$dirname"/plugins
 export QML_IMPORT_PATH="$dirname"/qml
 export QML2_IMPORT_PATH="$dirname"/qml
 export QT_LOGGING_RULES="*=false"
-"$dirname/$appname" "$@"
+exec "$dirname/$appname" "$@"
