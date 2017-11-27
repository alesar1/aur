#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=powerpill
pkgver=2017.11
pkgrel=1
pkgdesc='Pacman wrapper for faster downloads.'
arch=(any)
license=(GPL)
url="https://xyne.archlinux.ca/projects/powerpill"
depends=(aria2 'pm2ml>2012.12.12' pyalpm python3 python3-xcgf python3-xcpf reflector)
optdepends=('python3-threaded_servers: internal Pacserve support' 'rsync: Rsync download support')
backup=(etc/powerpill/powerpill.json)
source=(
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2017.11.tar.xz
  https://xyne.archlinux.ca/projects/powerpill/src/powerpill-2017.11.tar.xz.sig
)
sha512sums=(
  dc0d3f190bd5fae2835872416b0a32ed8758e398e714268ed7b15f1d52cd026a7b980ac8df53e2228e0d4f1ed6d0e692052805503b9310e6eba7400cd75eb539
  e4dfdc232c546b93c11333bf6756b1dd8d89c87f1dc7b363dba276bf47fd0f12da2e8328425ea41738ec84fd18681ccd9b25b07701e494589c7b3de3a75ed2dc
)
md5sums=(
  fcd48c936c6fbe64cb153b876aa3e2a9
  f4794262946f082edf39ecb12dee69e4
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
