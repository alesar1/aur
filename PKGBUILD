# Maintainer: Artem Bezsmertnyi <artem.bezsmertny@gmail.com>
_author=tony
pkgname=tmuxp
pkgver=1.2.1
pkgrel=3
pkgdesc="Manage tmux workspaces from JSON and YAML, pythonic API, shell completion."
arch=(any)
url="https://github.com/tony/tmuxp"
license=('BSD')
depends=(
  'python'
  'python-argcomplete' 
  'python-click' 
  'python-libtmux>=0.6.0' 
  'python-kaptan' 
  'python-colorama'
)
options=(!emptydirs)
source=("https://github.com/tony/tmuxp/archive/v${pkgver}.tar.gz")
md5sums=('8b33e5dcee9aa91c906bcb9586c46a3b')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1

  install -D -m 644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
