# Maintainer: Alexandru Cheltutior <acrandom@pm.me>

pkgname=protonvpn-linux-gui
pkgver=2.0.7
pkgrel=3
pkgdesc="Official ProtonVPN Linux application"
arch=("x86_64")
url="https://github.com/ProtonVPN/linux-gui/"
license=("GPL3")
depends=("python>=3.5" "python-requests>=2.23.0" "python-configparser>=4.0.2" "python-gobject" "gtk3" "libappindicator-gtk3" "protonvpn-cli-ng")
makedepends=("python-setuptools")
source=("https://github.com/ProtonVPN/linux-gui/archive/v$pkgver.tar.gz")
md5sums=('70e9aa9226c5b16780af4c1581e06610')

package() {
	cd "linux-gui-$pkgver"
	python setup.py install --optimize=1 --root="$pkgdir"
	install -d -m755 "${pkgdir}/usr/share/applications"

# Gui Desktop Icon
cat <<EOF > "${pkgdir}/usr/share/applications/protonvpn-gui.desktop"
[Desktop Entry]
Name=ProtonVPN GUI
Version=2.0.0
Comment=${pkgdesc}
Exec=sudo protonvpn-gui
Icon=/usr/lib/python3.8/site-packages/protonvpn_linux_gui/resources/img/logo/protonvpn_logo.png
Terminal=false
StartupNotify=false
Type=Application
Categories=Utility;GUI;Network;VPN
EOF

# Tray Desktop Icon
cat <<EOF > "${pkgdir}/usr/share/applications/protonvpn-tray.desktop"
[Desktop Entry]
Name=ProtonVPN GUI Tray
Version=2.0.0
Comment=Unofficial ProtonVPN GUI Tray
Exec=protonvpn-tray
Icon=/usr/lib/python3.8/site-packages/protonvpn_linux_gui/resources/img/logo/protonvpn_logo.png
Terminal=false
StartupNotify=false
Type=Application
Categories=Utility;GUI;Network;VPN
EOF
}

