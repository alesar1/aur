# Maintainer: Douglas Chimento <dchimento @ gmail.com>
pkgname=elements-project
pkgver=0.21.0.1
pkgrel=1
arch=('aarch64' 'x86_64')
pkgdesc="Elements blockchain platform, a collection of feature experiments and extensions to the Bitcoin protocol"
url="https://github.com/ElementsProject/elements"
license=('MIT')
backup=('etc/elements/elements.conf')
source_x86_64=("https://github.com/ElementsProject/elements/releases/download/elements-${pkgver}/elements-elements-${pkgver}-x86_64-linux-gnu.tar.gz")
source_aarch64=("https://github.com/ElementsProject/elements/releases/download/elements-${pkgver}/elements-elements-${pkgver}-aarch64-linux-gnu.tar.gz")
source=(elements.conf
        elementsd.service
        elementsd-test.service
        elements-sysusers.conf
        elements-core-01-systemd-sysusers.hook
	elements-core-02-chown.hook)

sha256sums_x86_64=('ebe1f0c6e8510c3059a82936f61a64c2353a193409be245761de05f3152fbe53')
sha256sums_aarch64=('b34120a11c1fac41f150fb3a28dd5825e372c049723066280e51302f8b04ed90')
sha256sums=('SKIP'
	    'SKIP'
	    'SKIP'
            'SKIP'
            'SKIP'
	    'SKIP')

package() {
  cd "$srcdir/elements-elements-${pkgver}"
  msg2 'Installing essential directories'
  install -dm 700 "$pkgdir/etc/elements"
  install -dm 750 "$pkgdir/var/lib/elementsd"

  msg2 'Installing element.conf...'
  install -Dm 600 "$srcdir/elements.conf" -t "$pkgdir/etc/elements"

  msg2 'Installing elementd.service...'
  install -Dm 644 "$srcdir/elementsd.service" -t "$pkgdir/usr/lib/systemd/system"
  install -Dm 644 "$srcdir/elementsd-test.service" -t "$pkgdir/usr/lib/systemd/system"

  msg2 'Installing element-sysusers.conf...'
  install -Dm 644 "$srcdir/elements-sysusers.conf" "$pkgdir/usr/lib/sysusers.d/elements.conf"
    
  msg2 'Installing element...'
  for i in elements-cli  elementsd  elements-qt  elements-tx  elements-wallet ; do
    install -Dm 755 "bin/$i" "$pkgdir/usr/bin/$i"
  done
  msg2 'Installing libs...'
  install -Dm  755 lib/libelementsconsensus.so.0.0.0 "$pkgdir/usr/lib/libelementsconsensus.so.0.0.0"
  ln -s libelementsconsensus.so.0.0.0 "$pkgdir/usr/lib/libelementsconsensus.so.0"
  ln -s libelementsconsensus.so.0.0.0 "$pkgdir/usr/lib/libelementsconsensus.so"

  msg2 'Installing man...'
  for i in elements-cli.1 elementsd.1 elements-tx.1 elements-wallet.1; do
    install -Dm 644 "share/man/man1/$i" "$pkgdir/usr/share/man/man1/$i"
  done
  msg2 'Installing pacman hooks...'
  install -Dm 644 "$srcdir"/*.hook -t "$pkgdir/usr/share/libalpm/hooks"
}
