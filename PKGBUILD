#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2015.11.30
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(python3 pyalpm 'pm2ml>2012.12.12' reflector aria2 python3-xcpf)
optdepends=('rsync: Rsync download support' 'python3-threaded_servers: internal Pacserve support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2015.11.30.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2015.11.30.tar.xz.sig
)
sha512sums=(
  98b23d16cc3cf93b1ccb6abe23a9f1bc46348a15d1bc29708259b5c158232123958ef8399464bb6ec829350a4e3ab5d1e808003679a46de3eef19deb44ab655a
  062d915fda2daedcbcb8cdfd264b44d00a28768fe2bf93f9d13b79d1219e8c23b514c730d0bf49baafcb7b7212b92a1d7d68eabef734df08c0ef082c69cf4fc0
)
md5sums=(
  20251ccecc212a1e415ddf784df7ffe1
  06a3256ec76b5128452376c3ebbfd459
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
