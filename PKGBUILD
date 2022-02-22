# Maintainer: a821
# Contributor: asm0dey <pavel.finkelshtein+AUR@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>

pkgname=pgcli
pkgver=3.4.0
pkgrel=1
pkgdesc="a command line interface for Postgres with auto-completion and syntax highlighting"
url="http://pgcli.com/"
arch=(any)
license=('BSD')
depends=('python-sqlparse' 'python-psycopg2' 'python-click' 'python-prompt_toolkit'
         'python-configobj' 'python-pgspecial' 'python-setproctitle' 'python-cli_helpers'
         'python-keyring' 'python-pygments' 'python-pendulum')
makedepends=('python-setuptools')
source=($pkgname-$pkgver.tar.gz::https://github.com/dbcli/pgcli/archive/v$pkgver.tar.gz)
sha256sums=('34754bab97fc9afb2c59503c53468dc569c9a9c64349f03cac306912016a04b8')

package() {
    cd "pgcli-${pkgver}"
    python setup.py install --root="$pkgdir/" --optimize=1
    install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
