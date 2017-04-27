# Maintainer: Shameempk <mailtoshameempk@gmail.com>
pkgname=writefull
pkgver=3.0.0_beta17
pkgrel=1
pkgdesc="Writefull is an app that gives feedback on your writing by checking your text against databases of correct language."
arch=('i686' 'x86_64')
url="http://writefullapp.com/"
license=('custom')
source_i686=("https://d3aw1w08kaciwn.cloudfront.net/${pkgver//_/-}/${pkgname}_${pkgver//_/-}_ia32.zip")
source_x86_64=("https://d3aw1w08kaciwn.cloudfront.net/${pkgver//_/-}/${pkgname}_${pkgver//_/-}_amd64.zip")
md5sums_i686=("33a3928a0ad6641eb1e649c81994f7ed")
md5sums_x86_64=("fbb17bc14751523bc751d1ed6cb598b7")
noextract=("${pkgname}_${pkgver//_/-}_ia32.zip" "${pkgname}_${pkgver//_/-}_amd64.zip")
if [ "$(uname -m)" = "x86_64" ]; then
        _arch=amd64
	_arch_dir=x64
elif [ "$(uname -m)" = "i686" ]; then
        _arch=ia32
	_arch_dir=ia32
fi
prepare() {
	mkdir -p ${srcdir}/writefull
	bsdtar -xf "${pkgname}_${pkgver//_/-}_${_arch}.zip" -C "${srcdir}/writefull"
}
package() {
	install -dm755 "${pkgdir}/usr/share/${pkgname}"
	install -dm755 "${pkgdir}/usr/bin"

	cp -a ${srcdir}/writefull/Writefull-linux-${_arch_dir}/* "${pkgdir}/usr/share/${pkgname}"

	ln -s "/usr/share/${pkgname}/Writefull" "${pkgdir}/usr/bin/writefull"

	install -Dm644 "${pkgdir}/usr/share/${pkgname}/Writefull.ico" "${pkgdir}/usr/share/pixmaps/writefull.ico"
	sed -i 's/Icon=.*$/Icon=\/usr\/share\/pixmaps\/writefull.ico/' "${pkgdir}/usr/share/${pkgname}/writefull.desktop"
	sed -i 's/Exec=.*$/Exec=writefull/' "${pkgdir}/usr/share/${pkgname}/writefull.desktop"
	install -Dm644 "${pkgdir}/usr/share/${pkgname}/writefull.desktop" "${pkgdir}/usr/share/applications/writefull.desktop"
	
	install -Dm644 "${pkgdir}/usr/share/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 "${pkgdir}/usr/share/${pkgname}/LICENSES.chromium.html" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSES.chromium.html"

	rm "${pkgdir}/usr/share/${pkgname}/Writefull.ico"
	rm "${pkgdir}/usr/share/${pkgname}/writefull.desktop"
	rm "${pkgdir}/usr/share/${pkgname}/LICENSE"
	rm "${pkgdir}/usr/share/${pkgname}/LICENSES.chromium.html"
}

