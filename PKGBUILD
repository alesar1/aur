# Maintainer: laserK <echo 'Y29udGFjdEBrYXJzdGVucHVmYWhsLmRlCg==' | base64 -d>
pkgname=stm32cubemx
pkgver=6.5.0
pkgrel=1
epoch=
pkgdesc="graphical software configuration tool for STM32 microcontrollers that allows generating C initialization code"
arch=(any)
url="https://www.st.com/en/development-tools/stm32cubemx.html"
license=('custom')
groups=()
depends=('java-runtime=11'
	 'bash')
makedepends=('imagemagick')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=(!strip)
install=
changelog=
source=("https://sw-center.st.com/packs/resource/library/stm32cube_mx_v${pkgver//./}-lin.zip"
 	"LICENSE"
 	"stm32cubemx.desktop"
 	"stm32cubemx.sh")
noextract=()
sha512sums=('04193df756069fa7d8b9253483513b508067b535c698f3ee15a685887b78ee1eee132b008a0c3236bfae62efb6df73463bf883a22bc4e229453fbd7e18cc3abf'
            'ad1897ea5234b712d726b5d3423f05f1c0c5a64e28354afe07dce7451563ae4492366cc252ca379b44793797be20011a66458431fd5453c18a7543ccb8df5397'
            '56bff32e35f8eb09ae4df94e4e885aaf9349c687ce9f4901ddd11c83b69a32b19d99ab8dbd90c6679e86e7213c4d41640e52ab0d80b8fc4640a1bc5df9a3af32'
            '99ed513b6813135a3e4ee8f2a9c6e061b4fb5edddbcffcd81eca6ee8ac7fe23f804870a4aa168d83bb6902cde41f28cab0a4fa65e467ce25eb6240f701672694')
validpgpkeys=()

package() {
   cd "${srcdir}"
	mkdir -p "${pkgdir}/opt/stm32cubemx"
	cp -r "${srcdir}/MX/." "${pkgdir}/opt/stm32cubemx"
   install -Dm 755 "${srcdir}/stm32cubemx.sh" "${pkgdir}/usr/bin/${pkgname}"
	#icon and desktop file
	convert "${srcdir}/MX/help/STM32CubeMX.ico[0]" "${srcdir}/MX/${pkgname}.png"
	install -Dm 644 "${srcdir}/MX/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	
	#license
	install -Dm 644 "${srcdir}/MX/help/software_license_agreement.pdf" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE.pdf"
}
