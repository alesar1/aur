#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2016.3
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf reflector)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.3.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.3.tar.xz.sig
)
sha512sums=(
  d292eda5ed0da2b61dbc6254435d8c5dc44d1b463bbc32d5b89eff38f1f3913c950ac16250325393854c80cf57730d1efdc8987b60a7d32a27b6dc616511ff3a
  94cdce3d950842dfe487e41a66eeed503f6bea17138540acf328a7bad51ad23a25e1baa6894f3752e4693d6ea2cc9903d4bd274714c20fa414c68adabbea3eb3
)
md5sums=(
  9cae7b38dff32cac29d7662e6d436a8f
  b2bdfcdb1e150c9f00d1c389c80f2412
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
