# Maintainer: Bryce <onyxdelta@hotmail.com>
pkgname="trilium-bin"
pkgver=0.30.7
pkgrel=1
pkgdesc="A hierarchical note taking application built on modern technologies."
depends=('python' 'make' 'gconf' 'libxss' 'nss' 'lib32-gcc-libs' 'gtk3')
arch=('x86_64')
url="https://github.com/zadam/trilium"
license=('AGPL')
source=("https://github.com/zadam/trilium/releases/download/v$pkgver/trilium-linux-x64-$pkgver.tar.xz")
sha512sums=('21c2e6cd1a7fe5c86363901fc196821e794b61191f809e0e59bc4303630637c386c142ce04469520d74c84581653295acd92cf036abf9630df51a2eaaef54bc5')

package()
{
	export destdir="$pkgdir/"
	#Make folders for extraction
	mkdir -p "$pkgdir/opt/trilium"
	mkdir -p "$pkgdir/usr/bin"
	mkdir -p "$pkgdir/usr/share/applications"
	#Move main files
	mv trilium-linux-x64/* "$pkgdir/opt/trilium"
	chmod -R 0755 "$pkgdir/opt/trilium"
	#Write command and make executable
	echo -e "#!/bin/sh
/opt/trilium/trilium" > "$pkgdir/usr/bin/trilium"
	chmod +x "$pkgdir/usr/bin/trilium"
	#Create .desktop file
	echo -e "[Desktop Entry]
Name=Trilium
GenericName=Note Taking Application
Comment=A hierarchical note taking application built on modern technologies.
Exec=trilium %f
Icon=/opt/trilium/icon.png
Terminal=false
Type=Application
Categories=Office
StartupWMClass=trilium notes" > "$pkgdir/usr/share/applications/trilium.desktop"
}
