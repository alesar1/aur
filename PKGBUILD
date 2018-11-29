pkgname=termtosvg-git
pkgver=0.6.0.r2.gc68e344
pkgrel=1

pkgdesc='record terminal sessions as svg animations'
url='https://github.com/nbedos/termtosvg'
arch=('any')
license=('BSD')

depends=('python-pyte' 'python-lxml')
makedepends=('git' 'python-setuptools')

provides=('termtosvg')
conflicts=('termtosvg')

source=('git+https://github.com/nbedos/termtosvg#branch=develop')

sha256sums=('SKIP')

pkgver() {
    cd termtosvg
    git describe --long --tags | sed -r 's/^v//; s/([^-]*-g)/r\1/; s/-/./g'
}

prepare() {
    cd termtosvg

    # Use the correct manual section.  XXX report this.
    sed -i '3 s/1/5/' man/termtosvg-templates.man.1
    mv man/termtosvg-templates.man.1 man/termtosvg-templates.man.5
}

build() {
    cd termtosvg
    python setup.py build
}

package() {
    cd termtosvg
    python setup.py install --root="$pkgdir" --optimize=1

    install -Dm0644 man/termtosvg.man.1 "$pkgdir"/usr/share/man/man1/termtosvg.1
    install -Dm0644 man/termtosvg-templates.man.5 "$pkgdir"/usr/share/doc/"$pkgname"/termtosvg-templates.5

    install -Dm0644 LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"/LICENSE
}
