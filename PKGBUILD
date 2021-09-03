# Maintainer: Senderman <doletov.fyodor@yandex.ru>

pkgname=pulseaudio-smdev-reload
pkgdesc="Reload pulseaudio devices on smdev systems"
pkgver=1.0
pkgrel=1
arch=('any')
url="https://aur.archlinux.org/packages/$pkgname"
depends=('smdev' 'pulseaudio')
license=('Apache')
source=('40-pulse' 'pulseaudio-smdev-reload')
md5sums=('35366b9041c3631fe2ca022a76b1666c'
         'cf568f1c677cddf7c696cc80a16b25ee')


package() {
    install -Dm0644 $srcdir/40-pulse $pkgdir/etc/smdev/add/40-pulse
    install -Dm0644 $srcdir/40-pulse $pkgdir/etc/smdev/remove/40-pulse
    install -Dm0755 $srcdir/pulseaudio-smdev-reload $pkgdir/usr/bin/pulseaudio-smdev-reload
    msg ''
    msg '==========================================================='
    msg 'add pulseaudio-smdev-reload & to your .xinitrc or .xprofile'
    msg '==========================================================='
    msg ''
}
