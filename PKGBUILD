# Maintainer: Sidney Kuyateh <autinerd-arch@kuyateh.eu>

pkgname=meta-package-manager
pkgver=5.5.1
pkgrel=1
pkgdesc='A wrapper around all package managers'
url='https://kdeldycke.github.io/meta-package-manager/'
makedepends=(python-build python-installer python-wheel python-poetry)
depends=('python>=3.7' python-boltons python-click python-click-extra python-tabulate python-tomli python-tomli-w python-xmltodict)
checkdepends=(python-pytest python-pytest-cov python-pytest-randomly python-pytest-xdist)
license=('GPL2')
arch=('any')
source=("https://github.com/kdeldycke/${pkgname}/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('5f245de09397ab068ed1c191c2f164d004cf497a5aebb959d310dd6bda9495a73e4d242e65867a03b6f99531c48f26e3df8bbdad38076f645e7fc9d3ab055b5b')

build() {
    # Poetry has a bug where .gitignore files in any parent directory is used in excluding files to build, resulting in an empty package.
    if [ -e "$srcdir/../.gitignore" ]; then
        mv "$srcdir/../.gitignore" "$srcdir/../.gitignore.bak"
        GITIGNORE_MOVED=1
    fi
    cd "$srcdir/$pkgname-$pkgver"
    python -m build --wheel --no-isolation
    if [ $GITIGNORE_MOVED = 1 ]; then
        mv "$srcdir/../.gitignore.bak" "$srcdir/../.gitignore"
    fi
}

check() {
    # Pytest does currently not run successfully due to a bug in the tests. Will be uncommented when the bug is fixed.
    # cd "$srcdir/$pkgname-$pkgver"
    # pytest
    true
}

package() {
    cd "$srcdir/$pkgname-$pkgver"
    python -m installer --destdir="$pkgdir" dist/*.whl
    install -Dm0644 -t "$pkgdir/usr/share/licenses/$pkgname/" license
}
