#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2020.12
pkgrel=1
pkgdesc='Pacman wrapper for faster downloads.'
arch=(any)
license=(GPL)
url="https://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('python3-threaded_servers: internal Pacserve support' 'reflector: Reflector and Rsync support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2020.12.tar.xz
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2020.12.tar.xz.sig
)
sha512sums=(
  ebd422b9faf3611b88531a9667752e2cdd94ac676a9629a0198afff5ff2a084228e5611440e5ec570b1eea0c8b128e94a3b67a98653448de41717e4aedd3f65e
  cd41f1f5c2101212aca29edca23260601fad124560dd741323faf32562b80942da4593db901072ea7a2a356a4a587a55f953524af162db66e03012c4fe4faaa2
)
md5sums=(
  2524ae1ec0d305a2e26700007aad52d6
  7fb167ef1d9bef827b627f2a89e73aec
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm644 'powerpill.json' "$pkgdir/etc/powerpill/powerpill.json"
  install -Dm644 'man/powerpill.json.1.gz' "$pkgdir/usr/share/man/man1/powerpill.json.1.gz"
  install -Dm644 'powerpill-bash-completion.sh' "$pkgdir/usr/share/bash-completion/completions/powerpill"
  install -Dm644 '_powerpill.zsh' "$pkgdir/usr/share/zsh/site-functions/_powerpill"
}

# vim: set ts=2 sw=2 et:
