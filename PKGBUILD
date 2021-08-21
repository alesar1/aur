# Maintainer: Jan Rydzewski <flegmer@gmail.com>
# Maintainer: amesgen <amesgen AT amesgen DOT de>

pkgname='dhall-json-bin'
pkgver=1.7.8
pkgrel=1
pkgdesc="Dhall to JSON compiler and a Dhall to YAML compiler"
arch=('x86_64')
url='https://github.com/dhall-lang/dhall-haskell'
license=('BSD')
conflicts=('dhall-json')

_dhall_ver=1.40.0

source=("dhall-json-$_dhall_ver-$pkgver.tar.bz2::https://github.com/dhall-lang/dhall-haskell/releases/download/$_dhall_ver/dhall-json-$pkgver-x86_64-linux.tar.bz2"
        "LICENSE-$pkgver::https://raw.githubusercontent.com/dhall-lang/dhall-haskell/$_dhall_ver/dhall-json/LICENSE")
sha256sums=('5297cae649ef356d4d33cb41960a3f86dd59485c0194e4092a06979393f45e7c'
            '91f68ca8606e7ae993148187e397e20431aa6d870ac9fcc70330a0479468eef9')

package() {
  install -Dm644 LICENSE-$pkgver "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  for f in dhall-to-json dhall-to-yaml json-to-dhall; do
    install -Dm755 "$srcdir/bin/$f" -t "$pkgdir/usr/bin/"
    _install_completion_script $f bash bash-completion/completions/$f
    _install_completion_script $f zsh zsh/site-functions/_$f
    _install_completion_script $f fish fish/vendor_completions.d/$f.fish
  done
}

_install_completion_script() {
  install -Dm644 <("$pkgdir/usr/bin/$1" --$2-completion-script "/usr/bin/$1") "$pkgdir/usr/share/$3"
}
