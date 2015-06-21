#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2014.12
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(python3 pyalpm 'pm2ml>2012.12.12' reflector aria2)
optdepends=('rsync: Rsync download support' 'python3-threaded_servers: internal Pacserve support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2014.12.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2014.12.tar.xz.sig
)
sha512sums=(
  b97685cf9aace031d396ee121395af3a95eb56e4b23361f736ffbc701a803e4afe677136a3d84d2f16cf2909547f7182be6e1735ea25a9220237b5c02d360dc6
  6622af47328e2de5f1251a75a46f140a78220bdfd8a039ffa69aa02351cda205ee1e745b1afb77040a37258502276a97a35afafadbe924591472d24458f21947
)
md5sums=(
  b61056c77845b57cce338982bc07d41a
  9e4c8b2f5083ab702588d9ed62a6353c
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "powerpill.json" "$pkgdir/etc/powerpill/powerpill.json"
  install -Dm644 "man/powerpill.json.1.gz" "$pkgdir/usr/share/man/man1/powerpill.json.1.gz"
  install -Dm644 "powerpill-bash-completion.sh" "$pkgdir/usr/share/bash-completion/completions/powerpill"
}

# vim: set ts=2 sw=2 et:
