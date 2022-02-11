# Maintainer: Cpt_Huntsman <other.plan1133@fastmail.com>
pkgname="trilium-bin-cn"
pkgver=0.50.1_20220210
pkgrel=1
pkgdesc="A hierarchical note taking application built on modern technologies with Simplified Chinese translation."
depends=('libxss' 'nss' 'gtk3')
arch=('x86_64')
url="https://github.com/Nriver/trilium-translation"
license=('AGPL3')
source=("https://github.com/Nriver/trilium-translation/releases/download/v$pkgver/trilium-cn-linux-x64.zip")
sha256sums=('9ffc123dd8323d341a21f57ac13c96e3f7f40a0fa1e8c1b011e76f971813bdb0')

package() {
    export destdir="$pkgdir/"
    # Make folders for extraction
    mkdir -p "$pkgdir/opt/$pkgname"
    mkdir -p "$pkgdir/usr/bin"
    mkdir -p "$pkgdir/usr/share/applications"
    # Move main files
    mv trilium-linux-x64/* "$pkgdir/opt/$pkgname"
    # Write command and make executable
    echo -e "#!/bin/sh
/opt/$pkgname/trilium" > "$pkgdir/usr/bin/trilium-cn"
    # Create .desktop file
    echo -e "[Desktop Entry]
Name=Trilium CN
GenericName=Note Taking Application
Comment=A hierarchical note taking application built on modern technologies with Simplified Chinese translation.
Exec=trilium-cn %f
Icon=/opt/$pkgname/icon.png
Terminal=false
Type=Application
Categories=Office
StartupWMClass=trilium notes" > "$pkgdir/usr/share/applications/trilium-notes-cn.desktop"
    chmod -R 0755 "$pkgdir"
}
