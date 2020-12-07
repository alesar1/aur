# Maintainer: amesgen <amesgen AT amesgen DOT de>

pkgname='dhall-yaml-bin'
pkgver=1.2.4
pkgrel=1
pkgdesc="Dhall to YAML compiler and a YAML to Dhall compiler"
arch=('x86_64')
url='https://github.com/dhall-lang/dhall-haskell'
license=('GPL3')
conflicts=('dhall-yaml')

_dhall_ver=1.37.0

source=("dhall-yaml-$_dhall_ver-$pkgver.tar.bz2::https://github.com/dhall-lang/dhall-haskell/releases/download/$_dhall_ver/dhall-yaml-$pkgver-x86_64-linux.tar.bz2")
sha256sums=('a717dbf6e813bfacf457b9a7ab9c1f928f2430001d1d85858d4aed1f86c131c1')

package() {
  for f in dhall-to-yaml-ng yaml-to-dhall; do
    install -Dm755 "$srcdir/bin/$f" -t "$pkgdir/usr/bin/"
    _install_completion_script $f bash bash-completion/completions/$f
    _install_completion_script $f zsh zsh/site-functions/_$f
    _install_completion_script $f fish fish/vendor_completions.d/$f.fish
  done
}

_install_completion_script() {
  install -Dm644 <("$pkgdir/usr/bin/$1" --$2-completion-script "/usr/bin/$1") "$pkgdir/usr/share/$3"
}
