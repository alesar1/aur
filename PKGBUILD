# Maintainer: xiretza <xiretza+aur@gmail.com>
# Maintainer: Rod Kay <charlie5 on #ada at freenode.net>
# Contributor: Pierre-Marie de Rodat <pmderodat on #ada at freenode.net>
# Contributor: Earnestly <zibeon AT googlemail.com>

pkgbase=gprbuild
pkgname=(libgpr gprbuild)
epoch=1
pkgver=21.0.0
pkgrel=1
pkgdesc="Builder for multi-language systems"
arch=('i686' 'x86_64')
url="https://github.com/AdaCore/gprbuild/"
license=('GPL3')
makedepends=('gprbuild-bootstrap' 'xmlada')

source=(
	"$pkgbase-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
	"gprconfig_kb-$pkgver.tar.gz::https://github.com/AdaCore/gprconfig_kb/archive/v$pkgver.tar.gz"
    'relocatable-build.patch'
    'always-use-host-gprinstall.patch'
)
sha256sums=('54b7d1a3298160109aaee4d8c263c1ab3ab4abae75d354f3e90a4c51639167a2'
            '2aec26afad5bb1a4685d9c041c9c797ff5beda211a5e81f2a97452d2ceabc557'
            'd6479e03e6b6cfb09c133d94e3c47ea5d5e5e756b95554ab3106a679c3d57de4'
            '3fe0fd1df3156c9a8488d98ee6e7e822ae904ce410838661c8fc14c29abe2620')

prepare() {
    cd "$srcdir/$pkgbase-$pkgver"

    patch -Np1 -i "$srcdir/relocatable-build.patch"
    # By default, it tries to use the freshly-built gprinstall to install gprbuild, but that requires libgpr,
    # which can't be installed yet. Simply fall back to gprinstall from gprbuild-bootstrap
    patch -Np1 -i "$srcdir/always-use-host-gprinstall.patch"

    ln -sfT "$srcdir/gprconfig_kb-$pkgver/db/" "share/gprconfig"

    # GPRbuild hard-codes references to /usr/libexec, but ArchLinux packages
    # must use /usr/lib instead.
    sed -i 's/libexec/lib/g' doinstall gprbuild.gpr \
        "$srcdir/gprconfig_kb-$pkgver/db/compilers.xml" \
        "$srcdir/gprconfig_kb-$pkgver/db/linker.xml" \
        "$srcdir/gprconfig_kb-$pkgver/db/gnat.xml"

}

build() {
    cd "$srcdir/$pkgbase-$pkgver"

    export OS=UNIX
    GPRBUILD_OPTIONS="-R -cargs $CFLAGS -largs $LDFLAGS -gargs"
    make BUILD=production setup

    make GPRBUILD_OPTIONS="$GPRBUILD_OPTIONS" libgpr.build
    make GPRBUILD_OPTIONS="$GPRBUILD_OPTIONS" build
}

package_libgpr() {
    pkgdesc="Ada library to handle GPRbuild project files"
    depends=('xmlada')

    # both provide /usr/lib/libgpr.so
    conflicts=('grpc')

    cd "$srcdir/$pkgbase-$pkgver"

    make prefix="$pkgdir/usr" libgpr.install
}

package_gprbuild() {
    provides=('gprbuild-bootstrap')
    conflicts=('gprbuild-bootstrap')
    depends=('libgpr' 'xmlada')
    cd "$srcdir/$pkgbase-$pkgver"

    make prefix="$pkgdir/usr" install

    # We don't need to distribute the installation script
    rm -f -- "$pkgdir/usr/doinstall"
}

# vim: set et ts=4:
