# Maintainer: Gomasy <nyan@gomasy.jp>

pkgname=ibus-autostart
pkgver=1.2
pkgrel=1
pkgdesc="iBus daemon autostart with XDG Autostart Specification"
arch=('any')
license=('none')
depends=('ibus')

package() {
  mkdir -p "$pkgdir/etc/xdg/autostart"
  cat <<'EOF' > "$pkgdir/etc/xdg/autostart/ibus-daemon.desktop"
[Desktop Entry]
Name=IBus (KIMPanel)
GenericName=Input Method Framework
Comment=Start IBus Input Method Framework
Exec=ibus-daemon -drxR
Icon=ibus
Terminal=false
Type=Application
Categories=System;Utility;
X-GNOME-Autostart-Phase=Applications
X-GNOME-AutoRestart=false
X-GNOME-Autostart-Notify=true
X-KDE-autostart-after=panel
EOF
}
