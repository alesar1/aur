# Maintainer: John Jenkins <twodopeshaggy@gmail.com>

pkgname=googler
pkgver=2.3
pkgrel=0
pkgdesc="Google Search from command line"
arch=('any')
url="https://github.com/jarun/googler"
license=('GPL3')
depends=('python')
conflicts=('googler-git')
source=("https://github.com/jarun/googler/archive/v$pkgver.tar.gz")
md5sums=('cb1631f8886336e690d3aaa22e05798c')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 googler "${pkgdir}/usr/bin/googler"
  install -Dm644 googler.1 "${pkgdir}/usr/share/man/man1/googler.1"
  install -Dm644 auto-completion/fish/googler.fish "${pkgdir}/usr/share/fish/vendor_completions.d/googler.fish"
  install -Dm644 auto-completion/bash/googler-completion.bash "${pkgdir}/etc/bash_completion.d/googler"
  install -Dm644 auto-completion/zsh/_googler "${pkgdir}/usr/share/zsh/site-functions/_googler"
}
