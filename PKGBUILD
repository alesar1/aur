# Maintainer: Logan Magee <mageelog@gmail.com>

_pkgname=v
pkgname=vlang
# Package maintainer(s): remember to update the commit for vc in prepare()
pkgver=0.2.1
pkgrel=3
pkgdesc='Simple, fast, safe, compiled language for developing maintainable software'
arch=('x86_64')
url='https://vlang.io'
license=('MIT')
depends=('glibc')
optdepends=('glfw' 'libfreetype.so' 'openssl')
makedepends=('git')
conflicts=('v' 'vlang-bin' 'vlang-git')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/$pkgname/$_pkgname/archive/$pkgver.tar.gz"
        'git+https://github.com/vlang/vc'
        'no-compile.patch')
sha256sums=('0e7d37e7ef7a5001b86811239770bd3bc13949a6489e0de87b59d9e50ea342c9'
            'SKIP'
            '750d396c1e52859b2791459c5a483c6cc0d17ae4b1fda740c8434f4086dcbfd5')

prepare() {
    cd vc
    git checkout 563c3bd5720e513326fbac728dde29454275de9d # 0.2.1

    cd "$srcdir/$_pkgname-$pkgver"
    patch -Np1 -i ../no-compile.patch
}

build() {
    cd $_pkgname-$pkgver
    cc -std=gnu11 -w -o v ../vc/v.c -lm $LDFLAGS
    ./v -prod self

    # We have to build vpm and build-tools manually since we disabled automatic
    # compilation in no-compile.patch
    ./v cmd/tools/vpm.v
    ./v cmd/tools/vbuild-tools.v
    ./v build-tools
}

package() {
    cd $_pkgname-$pkgver
    install -d "$pkgdir/usr/lib/vlang" "$pkgdir/usr/share/vlang" "$pkgdir/usr/bin"
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm755 v "$pkgdir/usr/lib/vlang"
    cp -a cmd "$pkgdir/usr/lib/vlang/"
    cp -a examples "$pkgdir/usr/share/vlang/"
    cp -a thirdparty "$pkgdir/usr/lib/vlang/"
    cp -a vlib "$pkgdir/usr/lib/vlang/"
    cp v.mod "$pkgdir/usr/lib/vlang/"
    ln -s /usr/lib/vlang/v "$pkgdir/usr/bin/v"
}
