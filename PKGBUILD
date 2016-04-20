#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2016.4.5.1
pkgrel=1
pkgdesc='Pacman wrapper for parallel and segmented downloads.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf reflector)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.4.5.1.tar.xz
  http://xyne.archlinux.ca/projects/powerpill/src/powerpill-2016.4.5.1.tar.xz.sig
)
sha512sums=(
  9c15fe0baa3008a87cd35f4bc6ef87a1d67e5ae3cadee8031beb5fd394c42a732be738c0017895a2159ea7b60aa8fe91fef4b79439c4522f7320f3c67ccfe19b
  f21f130720d9d5fffa7226c2db1b2e1007ad86444afb4574a571ffdf68392c16567d400fe2f544306c948791378d43e601606d09b2958000e69c721ac1a9e48b
)
md5sums=(
  d155136615045299b34acd020b17a444
  ce963362288f53b859d87e625a50b9aa
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
