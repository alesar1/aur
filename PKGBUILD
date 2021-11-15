# Maintainer: eomanis at web dot de

_appname='jmusicbot'
pkgname="$_appname"
_pkgverUpstream="0.3.6"
pkgver="${_pkgverUpstream//-/.}"
pkgrel=2
pkgdesc="A cross-platform Discord music bot with a clean interface"
arch=('any')
url='https://github.com/jagrosh/MusicBot'
license=('Apache')
depends=('java-runtime-headless>=11')
makedepends=('java-environment>=11' 'maven' 'libxslt')
source=("JMusicBot-${_pkgverUpstream}.tar.gz::https://github.com/jagrosh/MusicBot/archive/refs/tags/${_pkgverUpstream}.tar.gz"
        "fix-pom.xslt"
        "jmusicbot@.service")
sha384sums=('84f26730f6dbda43780e329a85fe826f84c9ce42f431ceafb02a55f53cf2613b4b5a4a630904ab95a6131bcc96b4aeff'
            'b14dcf390d40f51d40b2aee4e8c44722837ad7a9850ecfd48174c74e8ed50709b6a64a817c301a2186e6386c26de0440'
            '12ca3d4af2f117fee113034cca66558aa2cec47865245f58b1a4e71ae2cebd24783e14f644292e9344b290c1962448a8')

build() {
    local buildDir="${srcdir}/MusicBot-${_pkgverUpstream}"

    cd "$buildDir"

    # Project version in pom.xml is set to "Snapshot"
    # Set it to the upstream version
    xsltproc --nonet --stringparam project-version "$_pkgverUpstream" "${srcdir}/fix-pom.xslt" "pom.xml" > "pom.xml.tmp"
    mv "pom.xml" "pom.xml.original"
    mv "pom.xml.tmp" "pom.xml"

    # Set JAVA_HOME if it is not set
    if test -z ${JAVA_HOME+x}; then
        export JAVA_HOME="/usr/lib/jvm/default"
    fi
    export JAVA_HOME="$JAVA_HOME"
    echo "JAVA_HOME is \"$JAVA_HOME\"" >&2

    # Set MVN_HOME if it is not set
    if test -z ${MVN_HOME+x}; then
        export MVN_HOME="/opt/maven"
    fi
    export MVN_HOME="$MVN_HOME"
    echo "MVN_HOME is \"$MVN_HOME\"" >&2

    # Build with Maven
    mvn clean
    mvn install
}

package() {
    local buildDir="${srcdir}/MusicBot-${_pkgverUpstream}"
    local jarFileName="JMusicBot-${_pkgverUpstream}-All.jar"
    local jarFileNameUnversioned="JMusicBot.jar"
    local refConfFileName="reference-${_pkgverUpstream}.conf"
    local refConfFileNameUnversioned="reference.conf"

    # Place the .jar file and create a non-versioned symlink to it
    mkdir --parents "${pkgdir}/usr/bin"
    cd "${pkgdir}/usr/bin"
    cp --target-directory . "${buildDir}/target/$jarFileName"
    chmod u=rwx,go=rx "$jarFileName"
    ln -s "$jarFileName" "$jarFileNameUnversioned"

    # Create bash launcher: Default
    echo -n \
"#!/bin/bash
/usr/bin/java -jar \"/usr/bin/${jarFileNameUnversioned}\" \"\$@\"
"       > jmusicbot
    chmod u=rwx,go=rx jmusicbot

    # Create bash launcher: Command line only
    echo -n \
"#!/bin/bash
/usr/bin/java -Dnogui=true -jar \"/usr/bin/${jarFileNameUnversioned}\" \"\$@\"
"       > jmusicbot-nogui
    chmod u=rwx,go=rx jmusicbot-nogui

    # Place the reference configuration file and create a non-versioned
    # symlink to it
    mkdir --parents "${pkgdir}/usr/share/jmusicbot"
    cd "${pkgdir}/usr/share/jmusicbot"
    cp "${buildDir}/src/main/resources/reference.conf" "$refConfFileName"
    chmod u=rwx,go=rx "$refConfFileName"
    ln -s "$refConfFileName" "$refConfFileNameUnversioned"

    # Place the systemd instantiated system service
    mkdir --parents "${pkgdir}/usr/lib/systemd/system"
    cd "${pkgdir}/usr/lib/systemd/system"
    cp --target-directory . "${srcdir}/jmusicbot@.service"
    chmod u=rwx,go=rx "jmusicbot@.service"
}
