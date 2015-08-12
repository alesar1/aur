# Maintainer: skydrome <skydrome at@at i2pmail do.t org>
# Contributors:
#

_fred=#tag=build01469  # build 1469: 2015-07-19
#_fred=#tag=testing-build-1469-pre2
#_fred=#branch=next    # git HEAD

# comment out to run unit tests
BUILDENV+=('!check')

# plugins failing to build:
_plugins=('WebOfTrust' 'JSTUN' 'UPnP' 'KeyUtils')

pkgname=freenet
pkgver=0.7.5.1469
pkgrel=2
epoch=1
_pkgver=0.7.5
pkgdesc="An encrypted network without censorship"
url="https://downloads.freenetproject.org"
license=('GPL2')
arch=('any')
install='freenet.install'

depends=('java-runtime' 'bcprov151>=1.52' 'gmp' 'java-service-wrapper')
makedepends=('java-environment' 'unzip' 'apache-ant' 'apache-ant-contrib' 'git')
checkdepends=('junit')

backup=('opt/freenet/wrapper.config'
        'opt/freenet/conf/freenet.ini')

# these are packages we need to download to prevent ant from
# downloading them itself we are also going to build as much
# as we can from source, including this array
_deps=("http://downloads.sourceforge.net/project/sevenzip/LZMA%20SDK/4.65/lzma465.tar.bz2"
       "league-lzmajio-0.95-0-gd38bf5c.tar.gz::https://codeload.github.com/league/lzmajio/legacy.tar.gz/0.95"
       "http://downloads.sourceforge.net/project/bitcollider/jBitcollider%20%28Java%29/0.8/jBitcollider-0.8.zip"
       "https://www.spaceroots.org/software/mantissa/mantissa-7.2-src.zip"
       "${url}/contrib/db4o-7.4-java.zip")

noextract=('lzma465.tar.bz2'
           'league-lzmajio-0.95-0-gd38bf5c.tar.gz'
           'jBitcollider-0.8.zip'
           'mantissa-7.2-src.zip'
           'db4o-7.4-java.zip'
           *.jar)

# here we have only java-commons-compress and java-db4o coming
# prebuilt by the freenetproject, the rest we attempt to build ourselves
source=("git+https://github.com/freenet/fred.git${_fred}"
        "git+https://github.com/freenet/contrib.git"
        "git+https://github.com/freenet/plugin-JSTUN.git"
        "git+https://github.com/freenet/plugin-UPnP.git"
        "git+https://github.com/freenet/plugin-KeyUtils.git"
        "git+https://github.com/freenet/plugin-WebOfTrust.git#branch=next"
        "${url}/alpha/opennet/seednodes.fref"
        "${url}/contrib/jar/latest/commons-compress.jar"
        "https://raw.githubusercontent.com/i2p/i2p.i2p/master/core/c/jcpuid/src/jcpuid.c"
        "https://raw.githubusercontent.com/i2p/i2p.i2p/master/core/c/jcpuid/include/jcpuid.h"
        'fred.properties' 'contrib.properties' 'run.sh'
        'freenet.service' 'freenet.ini' 'wrapper.config'
        "${_deps[@]}")

sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'e9552d1912216e88f2d04fd6882cc015acb81bd2a2b2392197b3758578b23f81'
            '16924be3c8f1322b659f3ff08060a43f45f2e8de6f95af28d86fe9876e79008d'
            'f1ecddb5395892e0b2e6282bc3a1437d06afa52758057850ecccfa0a79c45c5d'
            '9ec758801a9864ae10caf851ee60ed22c3ef44428e77689c203d9b890921a6d2'
            '24fed7935fcbfc6eb022e04abe8b9d22fda88eae8c1f73daf99e8f28a420d05f'
            '23301d421c1fd1d076ef2c8371881477924c03db21b19a8ca180a8db6349dfaa'
            '4a1597e4748012d684622f4491108eb8fae022f00dbca9a2f6a31a589ec022d2'
            '434f67e2e86edb555b7dfb572a52d7ff719373989e1f1830f779bfccc678539f'
            'e83c19b6f9137539ab4dd66a5bf1a5207b4b351eb808688d963f1081852be022'
            'ac83d727d6301e75cf1d441a1a1e72ba06ea119fa53a3bae65b3373108abf213'
            'c935fd04dd8e0e8c688a3078f3675d699679a90be81c12686837e0880aa0fa1e'
            '265f7ed2dd4fecb058884d3f8974674b06e0be46131c3b2bc6a310373937d2ef'
            'b36482ee9e919c669bb1797ff7e50f57edf505af67664e280fe1dff361861044'
            'e438135d69139ed4fa44400f416ea73935d16afe50dfe490b7bba0602ee89476'
            '73f307a8cbd114fdc0af8daa067994a2cdc364c4053e6734d16b8dd1d5a0469f')

pkgver() {
    cd "$srcdir/fred"
    echo "${_pkgver}.$(git describe |sed 's/build0//;s/-/./g')"
}

if [[ "$CARCH" = 'i686' ]]; then
     _arch=x86
    __arch=i386
else
     _arch=x86_64
    __arch=amd64
fi

prepare() {
    cd "$srcdir/fred"

    rm -rf contrib
    ln -sf ../contrib contrib
    mkdir -p contrib/freenet-ext/{dist,lib}

    # had a hard time building these sources, we'll use the binaries
    for dep in commons-compress
    do
        cp "$srcdir/${dep}.jar" contrib/freenet-ext/dist
    done

    # this is done to satisfy ant
    ln -sf /usr/share/java/wrapper.jar contrib/freenet-ext/dist/
    ln -sf /usr/share/java/{bcprov,hamcrest-core,junit}.jar lib/
    cp "$srcdir"/{lzma465.tar.bz2,league-lzmajio-0.95-0-gd38bf5c.tar.gz,jBitcollider-0.8.zip,mantissa-7.2-src.zip,db4o-7.4-java.zip} contrib/freenet-ext/lib

    # we're going to compile our own c libraries
    cd "$srcdir/contrib"
    rm -rf NativeBigInteger/lib/net/i2p/util/*
    rm -rf NativeThread/lib/freenet/support/io/*.so
    rm -rf onion-fec/bin/lib/{freebsd,linux,win32}-*

    cd "$srcdir/contrib/jcpuid"
    rm -rf lib/freenet/support/CPUInformation/* include/jcpuid.h

    # these are from the I2P project
    ln -sf "$srcdir"/jcpuid.h include/
    ln -sf "$srcdir"/jcpuid.c src/

    # append wrapper.jar location to JSTUN build
    sed -i "$srcdir/plugin-JSTUN/build.xml" \
        -e 's|<pathelement location="${freenet-ext.location}"/>|<pathelement location="${freenet-ext.location}"/>\n<pathelement location="/usr/share/java/wrapper.jar"/>|'
}

build() {
    source /etc/profile.d/apache-ant.sh
    source /etc/profile.d/jre.sh
    export _JAVA_HOME=/usr/lib/jvm/default

    build_jbigi
    build_nativethread
    build_jcpuid
    build_fec

    msg "Building Freenet-ext..."
    cd "$srcdir/fred/contrib/freenet-ext"
    ant -propertyfile "$srcdir/contrib.properties"

    cd dist
    for dep in bitcollider-core commons-compress db4o lzmajio mantissa wrapper
    do
        unzip -nq "${dep}.jar"
    done
    jar uf freenet-ext.jar com net org SevenZip

    msg "Building Freenet..."
    cd "$srcdir/fred"
    ant package-only -propertyfile "$srcdir/fred.properties" \
        -f build-clean.xml -Ddoc.skip=true

    build_plugins
}

build_jbigi() {
    msg "Building NativeBigInt..."
    cd "$srcdir/contrib/NativeBigInteger"

    _objdir='lib/net/i2p/util'
    CFLAGS+=" -fPIC -Wall"
    INCLUDES="-I./jbigi/include -I${_JAVA_HOME}/include -I${_JAVA_HOME}/include/linux"
    LDFLAGS="-shared -Wl,-O1,--sort-common,-z,relro,-soname,libjbigi.so -lgmp"

    gcc -c $CFLAGS $INCLUDES jbigi/src/jbigi.c
    gcc $LDFLAGS jbigi.o -o "$_objdir"/libjbigi-linux-none.so
}

build_nativethread() {
    msg "Building NativeThread..."
    cd "$srcdir/contrib/NativeThread"

    _objdir='lib/freenet/support/io'
    INCLUDES="-I${_JAVA_HOME}/include -I${_JAVA_HOME}/include/linux"
    LDFLAGS="-shared -Wl,-O1,--sort-common,-z,relro,-soname,llibnative.so -lc"

    javah -o NativeThread.h -classpath ../../fred/src freenet.support.io.NativeThread
    gcc -c $CFLAGS $INCLUDES NativeThread.c
    gcc $LDFLAGS NativeThread.o -o "$_objdir"/libNativeThread-${__arch}.so
}

build_jcpuid() {
    msg "Building NativeCPUID..."
    cd "$srcdir/contrib/jcpuid"

    _objdir='lib/freenet/support/CPUInformation'
    INCLUDES="-I./include -I${_JAVA_HOME}/include -I${_JAVA_HOME}/include/linux"
    LDFLAGS="-shared -Wl,-O1,--sort-common,-z,relro,-soname,libjcpuid-x86-linux.so"

    gcc -c $CFLAGS $INCLUDES src/jcpuid.c
    gcc $LDFLAGS jcpuid.o -o "$_objdir"/libjcpuid-${_arch}-linux.so
}

build_fec() {
    msg "Building onion-fec..."
    cd "$srcdir/contrib/onion-fec/src/csrc"

    _objdir='../../bin/lib/linux-${_arch}'
    LDFLAGS="-shared -Wl,-O1,--sort-common,-z,relro"
    INCLUDES="-I${_JAVA_HOME}/include -I${_JAVA_HOME}/include/linux"
    _CLASSPATH="-classpath ../ com.onionnetworks.fec"

    mkdir -p "$_objdir"
    rm -f *.o *.S com_*.h

    javah -o com_onionnetworks_fec_Native8Code.h  ${_CLASSPATH}.Native8Code
    javah -o com_onionnetworks_fec_Native16Code.h ${_CLASSPATH}.Native16Code
    gcc -S $CFLAGS fec.c -DGF_BITS=8  -o fec8.S
    gcc -S $CFLAGS fec.c -DGF_BITS=16 -o fec16.S
    gcc -c $CFLAGS $INCLUDES fec-jinterf.c -DGF_BITS=8  -o fec8-jinterf.o
    gcc -c $CFLAGS $INCLUDES fec-jinterf.c -DGF_BITS=16 -o fec16-jinterf.o
    gcc -c $CFLAGS fec8.S  -DGF_BITS=8  -o fec8.o
    gcc -c $CFLAGS fec16.S -DGF_BITS=16 -o fec16.o
    gcc $LDFLAGS fec8.o fec8-jinterf.o   -o "$_objdir"/libfec8.so
    gcc $LDFLAGS fec16.o fec16-jinterf.o -o "$_objdir"/libfec16.so
}

build_plugins() {
    for plugin in ${_plugins[@]}; do
        msg "Building Plugin ${plugin}..."
        cd "$srcdir/plugin-${plugin}"
        ant dist \
            -Dfreenet-cvs-snapshot.location=../fred/dist/freenet.jar \
            -Dfreenet-ext.location=../contrib/freenet-ext/dist/freenet-ext.jar \
            -Djunit.location=/usr/share/java/junit.jar \
            -Dtest.skip=true -Djavac.target.version=1.6
    done
}

check() {
    cd "$srcdir/fred"

    # these tests use alot of memory and can cause OOM's
    rm -f test/freenet/client/async/{*Storage,ClientRequestSelector}Test.java

    ant unit -propertyfile "$srcdir/fred.properties" \
        -f build-clean.xml
}

package() {
    cd "$srcdir/fred"

    # freenet
    install -dm755 "$pkgdir"/usr/bin
    install -dm700 "$pkgdir"/run/freenet
    install -dm750 "$pkgdir"/opt/freenet/{downloads,lib,conf/node,persistent-temp,tmp,plugins/data,user/{data,certs}}

    install -m640 "$srcdir"/{wrapper.config,run.sh}            "$pkgdir"/opt/freenet
    install -m640 "$srcdir"/freenet.ini                        "$pkgdir"/opt/freenet/conf
    install -m640 "$srcdir"/seednodes.fref                     "$pkgdir"/opt/freenet/conf/node
    install -m640 contrib/freenet-ext/dist/freenet-ext.jar \
                  dist/freenet.jar                             "$pkgdir"/opt/freenet/lib

    # plugins
    for plugin in ${_plugins[@]}; do
    install -m640 "$srcdir"/plugin-${plugin}/dist/${plugin}.jar "$pkgdir"/opt/freenet/plugins
    done

    echo "pluginmanager.loadplugin=$(echo ${_plugins[@]}|sed 's| |;|g')" \
        >>"$pkgdir"/opt/freenet/conf/freenet.ini

    # launcher
    chmod +x "$pkgdir"/opt/freenet/run.sh
    ln -s /opt/freenet/run.sh "$pkgdir"/usr/bin/freenet

    # systemd
    install -dm755 "$pkgdir"/usr/lib/tmpfiles.d
    install -Dm644 "$srcdir"/freenet.service    "$pkgdir"/usr/lib/systemd/system/freenet.service
    echo 'd /run/freenet 0700 freenet freenet' >"$pkgdir"/usr/lib/tmpfiles.d/freenet.conf

    # license
    install -dm755        "$pkgdir"/usr/share/licenses/freenet
    install -m644 LICENSE "$pkgdir"/usr/share/licenses/freenet/LICENSE
}
