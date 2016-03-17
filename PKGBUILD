#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2016.3.17
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf reflector)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.3.17.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.3.17.tar.xz.sig
)
sha512sums=(
  c5cc77e5995edb4680c60ee2f3f7afff34059b08b6fb9aef232444f433f963c4f8d9ed51b812eb047ad66a4d1848c60591956c7b2e783baae5a5f0c8d1720e48
  cbb9b43548bb4af9a033cc7187d71c10110de3c91da00381a63d6e574f6d88addec4c84af1face130d42c5a18952ddf2a41d84152ae3de6e10bd6d7d683834d1
)
md5sums=(
  8271e9ff3e9d67329ba8abb58686d3d3
  e62d0eff24eabee3d426e26d8d683aa9
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
