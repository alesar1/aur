# Maintainer: Nathan Robinson <nrobinson2000 at me dot com>

pkgname=pvr-tex-tool-bin
pkgver=2020.2
_versionstr='2020_R2'
pkgrel=2

pkgdesc="A comprehensive texture processing and compression tool with support for PVR textures."
url="https://www.imaginationtech.com/developers/powervr-sdk-tools/pvrtextool/"

arch=('x86_64')
options=('!strip')
license=('custom')

source=("install.run::https://cdn.imgtec.com/sdk/OFFLINE/PVRTexToolSetup-${_versionstr}.run-x64"
"LICENSE.html::https://www.imaginationtech.com/developers/powervr-sdk-tools/powervr-sdk-software-eula/")

sha256sums=('5f6bea49943e52d2f59541efca0bce8c1f841f9a5baf1a193c94cd0e1fcb4a31'
'251a7012447f80a9cc1459028e12fb09794a5d003482e0d7dd3580a52ab5c686')

# discovered with namcap(1)
depends=(qt5-base libxcursor dbus-x11 libxrandr freetype2)

package() {
_srcname=PVRTexTool

# Run installer
chmod +x "${srcdir}/install.run" 
"${srcdir}/install.run" --prefix "${srcdir}" --mode unattended

# Install license
install -Dm644 LICENSE.html "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.html"

# Install documentation
mkdir -p "${pkgdir}/usr/share/doc/${pkgname}"
cp -r ${srcdir}/${_srcname}/Documentation/* "${pkgdir}/usr/share/doc/${pkgname}"

# Install library
mkdir -p "${pkgdir}/usr/include"
mkdir -p "${pkgdir}/usr/lib"
cp ${srcdir}/${_srcname}/Library/Include/* "${pkgdir}/usr/include"
cp ${srcdir}/${_srcname}/Library/Linux_x86_64/* "${pkgdir}/usr/lib"

# Install CLI binaries
install -D "${srcdir}/${_srcname}/CLI/Linux_x86_64/compare" "${pkgdir}/usr/bin/pvr-compare"
install -D "${srcdir}/${_srcname}/CLI/Linux_x86_64/PVRTexToolCLI" "${pkgdir}/usr/bin/pvr-tex-tool"

# Install GUI application
mkdir -p "${pkgdir}/usr/share/${pkgname}"
cp -r ${srcdir}/${_srcname}/GUI/Linux_x86_64/* "${pkgdir}/usr/share/${pkgname}"
ln -s "/usr/share/${pkgname}/PVRTexToolGUI" "${pkgdir}/usr/bin/pvr-tex-tool-gui"

# Delete .run file (only pacman should be allowed to perform updates)
rm "${pkgdir}/usr/share/${pkgname}/autoupdate-linux-x64.run"

}
