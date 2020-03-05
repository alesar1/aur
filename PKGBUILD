# Maintainer: Lukas Grossar <lukas.grossar@gmail.com>

pkgname=hub-bin
pkgver=2.14.2
pkgrel=1
pkgdesc="A command-line tool that makes git easier to use with GitHub"
arch=('x86_64')
url="https://hub.github.com"
depends=('git')
license=('MIT')
source=("https://github.com/github/hub/releases/download/v${pkgver}/hub-linux-amd64-${pkgver}.tgz")
sha256sums=('74d95fdfb3c78c8af4e2025b04b916ad905ab99a361778500d58269847c7922d')

package() {
  prefix="${pkgdir}/usr" "${srcdir}/hub-linux-amd64-${pkgver}/install"

  install -Dm644 "${srcdir}/hub-linux-amd64-${pkgver}/etc/hub.bash_completion.sh" "$pkgdir/usr/share/bash-completion/completions/hub"
  install -Dm644 "${srcdir}/hub-linux-amd64-${pkgver}/etc/hub.zsh_completion" "$pkgdir/usr/share/zsh/site-functions/_hub"
  install -Dm644 "${srcdir}/hub-linux-amd64-${pkgver}/etc/hub.fish_completion" "$pkgdir/usr/share/fish/completions/hub.fish"
}
