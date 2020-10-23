# Maintainer: Yorick Peterse <aur AT yorickpeterse DOT com>

pkgname=inko-git
pkgver=0.8.1.r2.g055b80da
pkgrel=1
pkgdesc="A statically-typed object-oriented language for writing concurrent programs"
url="https://inko-lang.org"
license=(MPL2)
arch=(x86_64)
depends=('ruby>=2.3.0' 'libffi>=3.2.0')
makedepends=(coreutils 'rust>=1.34' make)
provides=(inko)
conflicts=(inko inko-bin)
options=(strip !docs !libtool !staticlibs)
source=('inko::git+https://gitlab.com/inko-lang/inko.git')
sha256sums=('SKIP')

pkgver() {
    cd inko
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd inko

    # Enable the libffi-system feature so the system libffy is used, instead of
    # compiling it from source.
    make build FEATURES='libinko/libffi-system' PREFIX='/usr'
}

package() {
    cd inko
    make install DESTDIR="${pkgdir}" PREFIX='/usr'
}
