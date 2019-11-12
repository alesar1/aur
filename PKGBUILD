# Maintainer: Byeonghoon Yoo <bh322yoo@gmail.com>

_repo_name=whitelist
_pkgname=pi-hole-whitelist

pkgname=$_pkgname-git
pkgver=r246.7badf17
pkgrel=1
pkgdesc='A simple tool to add commonly white listed domains to your Pi-Hole setup.'
arch=('any')
url="https://github.com/anudeepND/${_repo_name}"
license=('MIT')
depends=('curl')
makedepends=('git')
optdepends=(
  'pi-hole-server'
  'pi-hole-standalone'
)
source=(
  "${_repo_name}::${url//https/git}"
  "$_pkgname.service"
  "$_pkgname.timer"
)
md5sums=(
  'SKIP'
  'cfb38a2b5ddde4ae218d393e59041a68'
  'b42a22ac0cea2fc7c9713eaaf3e794d7'
)

pkgver() {
  cd "$_repo_name"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  install -Dm744 "$_repo_name/scripts/whitelist.sh" "$pkgdir/opt/$_pkgname/whitelist.sh"
  install -Dm644 "$_pkgname.service" "$pkgdir/usr/lib/systemd/system/$_pkgname.service"
  install -Dm644 "$_pkgname.timer" "$pkgdir/usr/lib/systemd/system/$_pkgname.timer"
  install -Dm644 "$_repo_name/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
