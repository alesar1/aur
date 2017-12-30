# Maintainer: Steven Cook <visage@deadhexagon.com>
# Contributor: Adam Eberlin <ae@adameberlin.com>
pkgname=anope
pkgver=2.0.6
pkgrel=2
pkgdesc="A set of IRC Services designed for flexibility and ease of use"
arch=('i686' 'x86_64')
url="http://www.anope.org/"
license=('GPL')
makedepends=('cmake')
optdepends=(
    'mariadb: MySQL database backend support'
    'sqlite: SQLite database backend support'
    'cyrus-sasl: SASL authentication support'
)
install="anope.install"
source=(
    "https://github.com/${pkgname}/${pkgname}/releases/download/${pkgver}/${pkgname}-${pkgver}-source.tar.gz"
    "anope.install"
    "anope.service"
    "anope.tmpfiles"
)
sha1sums=('bba0c947657f7388da2980241bc11b03f9f64743'
          '289a9ce8a4cd32bb58b650cb5d9b4bdc8cc7847d'
          '9ffa7e103e05cc7fee52e13794ecf7172f3e3f42'
          '7d38218fef729433ca32b81514264beea9981cf8')

prepare() {
    echo "If you want to enable any extra modules before building Anope,"
    echo "please run the ./extras script in the Anope source directory."
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}-source"

    # Create a non-interactive config
    cat << EOF > config.cache
INSTDIR="${srcdir}/install"
RUNGROUP="anope"
UMASK=077
DEBUG="no"
USE_RUN_CC_PL="no"
USE_PCH="no"
EXTRA_INCLUDE_DIRS=""
EXTRA_LIB_DIRS=""
EXTRA_CONFIG_ARGS=""
EOF

    ./Config -nointro -quick
    cd build && make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}-source/build"

    make install

    cd "${srcdir}/install"

    # Create directories
    install -Dd "${pkgdir}"{/var/log,/var/lib,/etc,/usr/lib}/${pkgname}
    install -Dd "${pkgdir}/var/lib/${pkgname}/runtime"
    install -Dd "${pkgdir}/usr/bin"
    install -Dd "${pkgdir}/usr/lib/${pkgname}"/{modules,locale}

    # Copy files

    # We don't need to copy anoperc or example.chk, since systemd
    # takes care of all of that now.

    # Executable files
    install -Dm755 bin/{anopesmtp,services} "${pkgdir}/usr/bin"

    # Configuration files
    install -Dm644 conf/*.conf "${pkgdir}/etc/${pkgname}"

    # Loadable modules
    install -Dm644 lib/modules/* "${pkgdir}/usr/lib/${pkgname}/modules"

    # Systemd service file
    install -Dm644 "${srcdir}/${pkgname}.service" "${pkgdir}/usr/lib/systemd/system/${pkgname}.service"

    # tmpfiles config
    install -Dm644 "${srcdir}/${pkgname}.tmpfiles" "${pkgdir}/etc/tmpfiles.d/${pkgname}.conf"

    cp -r data/* "${pkgdir}/var/lib/${pkgname}"
    cp -r locale/* "${pkgdir}/usr/lib/${pkgname}/locale"
}

