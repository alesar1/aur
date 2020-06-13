# Maintainer: Pierre-Marie de Rodat <pmderodat on #ada at freenode.net>
# Contributor: Rod Kay <charlie5 on #ada at freenode.net>
# Contributor: Earnestly <zibeon AT googlemail.com>
pkgname=gprbuild-git
pkgver=r3601.cf5c323f
pkgrel=1
pkgdesc="Builder for multi-language systems"
arch=('i686' 'x86_64')
url="https://github.com/AdaCore/gprbuild/"
license=('GPL3')
depends=('libgpr')
makedepends=('git' 'gprbuild-bootstrap-git' 'libgpr')

# gprbuild-bootstrap is here only to bootstrap gprbuild and xmlada
provides=("${pkgname%-git}" "gprbuild-bootstrap-git")
conflicts=("${pkgname%-git}" "gprbuild-bootstrap-git")
source=('git+https://github.com/AdaCore/gprbuild.git'
        'relocatable-build.patch'
        'expose-cargs-and-largs-makefile.patch')
sha1sums=('SKIP'
          '91b20bde99cf02410cdb2b74aa1adb014458a9b3'
          'ddaf20842ed9879c3f1cb24b3eb7615d5cfe61a5')

pkgver() {
    cd "$srcdir/${pkgname%-git}"
    printf "r%s.%s" \
        "$(git rev-list --count HEAD)" \
        "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/${pkgname%-git}"
    patch -Np1 -i "$srcdir/relocatable-build.patch"
    patch -Np1 -i "$srcdir/expose-cargs-and-largs-makefile.patch"

    # GPRbuild hard-codes references to /usr/libexec, but ArchLinux packages
    # must use /usr/lib instead.
    sed -i 's/libexec/lib/g' doinstall gprbuild.gpr \
        share/gprconfig/compilers.xml \
        share/gprconfig/linker.xml \
        share/gprconfig/gnat.xml
}

build() {
    cd "$srcdir/${pkgname%-git}"
    make prefix=/usr BUILD=production PROCESSORS="$(nproc)" setup
    make GPRBUILD_OPTIONS=-R BUILD=production
}

package() {
    cd "$srcdir/${pkgname%-git}"

    # Make one install at a time to avoid GPRinstall reading/writing to
    # the same installed project files at the same time.
    make prefix="$pkgdir/usr" install -j1  BUILD=production

    # We don't need to distribute the installation script
    rm -f -- "$pkgdir/usr/doinstall"
}
