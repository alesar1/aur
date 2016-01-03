#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2016
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf reflector)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.tar.xz.sig
)
sha512sums=(
  cdc0e3697f63eacf3af7df9082e09164d0fac5afe3be4e777a950b741dc3dcf5c7dee519279546941608ecfc80e86ac6efb26bb441572e08c0b7fb9b5ad42273
  c282ee8b933a62f1823ab6da0918659ce7ece23b76ce18dfcf3b6dc6e15dfa61e1e66e11e658ce9356582c5911711b24cf7cd821b2497bf6a4c1568b46b9d7a1
)
md5sums=(
  ca40933859d6575e40916a3292eeb460
  83de6b62a039245fa60151b146c0e115
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 "powerpill" "$pkgdir/usr/bin/powerpill"
  install -Dm644 "powerpill.json" "$pkgdir/etc/powerpill/powerpill.json"
  install -Dm644 "man/powerpill.json.1.gz" "$pkgdir/usr/share/man/man1/powerpill.json.1.gz"
  install -Dm644 "powerpill-bash-completion.sh" "$pkgdir/usr/share/bash-completion/completions/powerpill"
}

# vim: set ts=2 sw=2 et:
