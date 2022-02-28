# Maintainer: skydrome <skydrome@i2pmail.org>
# Contributor: Artyom Olshevskiy <siasia@siasia>

pkgname=java-service-wrapper
pkgver=3.5.49
pkgrel=1
pkgdesc="Enables a Java Application to be run as a Windows Service or Unix Daemon"
url="https://wrapper.tanukisoftware.com/doc/english/introduction.html"
arch=('i686' 'x86_64' 'aarch64' 'armv6h' 'armv7h')
license=('GPL2' 'custom:tanuki-community')
makedepends=('ant' 'java-environment>=8')
source=("https://wrapper.tanukisoftware.com/download/${pkgver}/wrapper_${pkgver}_src.tar.gz")
sha256sums=('81c49c1792c8a96541bfc7ab237846e6db790593ced979611400b3d58eb4fafe')

prepare() {
    cd "wrapper_${pkgver}_src"

    # Prevent building the testsuite on x64, this requires the cunit pkg
    # from the AUR, its a pain to require just for building
    sed -i "src/c/Makefile-linux-x86"*.make \
        -e '/all:/s/ testsuite//'

    # Hide deprecation warning
    sed -i "build.xml" \
        -e '/deprecation=/s/"on"/"off"/'
}

build() {
    cd "wrapper_${pkgver}_src"

    source /etc/ant.conf
    source /etc/profile.d/jre.sh
    export JAVA_HOME="${JAVA_HOME:-/usr/lib/jvm/default}"

    [[ "$CARCH" = @(x86_64|aarch64) ]] && _bits=64    || _bits=32
    [[ "$CARCH" = arm*              ]] && _arch=armhf || _arch=x86

    ant -Dfile.encoding=UTF-8 \
        -Dbits="$_bits" -Ddist.arch="$_arch" -Djavac.target.version=8 \
        jar compile-c-unix
}

package() {
    cd "wrapper_${pkgver}_src"
    install -Dm755 bin/wrapper       "${pkgdir}/usr/bin/java-service-wrapper"
    install -Dm644 lib/libwrapper.so "${pkgdir}/usr/lib/java-service-wrapper/libwrapper.so"
    install -Dm644 lib/wrapper.jar   "${pkgdir}/usr/share/java/wrapper-${pkgver}.jar"
    install -Dm644 doc/wrapper-community-license*.txt "${pkgdir}/usr/share/licenses/java-service-wrapper/LICENSE"
    ln -s /usr/share/java/wrapper-${pkgver}.jar "${pkgdir}/usr/share/java/wrapper.jar"
}
