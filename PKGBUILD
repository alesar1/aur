# Maintainer: Maarten de Vries <maarten@de-vri.es>

pkgname=ueyed
pkgdesc="IDS uEye camera daemon (USB and ethernet)"
pkgver=4.81.1
_version=4.81
pkgrel=2
arch=(x86_64)
license=(custom)
url='https://en.ids-imaging.com'
depends=('glibc' 'qt4')
makedepends=('patchelf')
install="$pkgname.install"
backup=("etc/ueye/ueyeethd.conf" "etc/ueye/ueyeusbd.conf")

source=(
	"https://en.ids-imaging.com/tl_files/downloads/uEye_SDK/driver/uEye-Linux-${_version}-64-bit.tgz"
	"ueyeethd.service"
	"ueyeusbd.service"
	"ueyeusb.rules"
	"ueyeethd.conf"
	"ueyeusbd.conf"
)

sha512sums=('ec1da826e64d9e1b35147de66749905b283d008edfcb3bb600d053d442d00cb52024b78c1172b788b7ed6e2b103c153640efdbee8451ee7a730f78328bebde25'
            '9e4156ecfc687b895ecf5055cd97e748760c675e8478caa46c2d19a49f1e2b31000e85a394198b9ab6da40d3b9ede4ffde4f960fc9f8ba7b1a44cffe69b77dbc'
            '3e5d357f43e68a143b9da9c712043224304e30699618da9d17f0916297c48d4865d7af2a040561f1b13c6bdef7c613bc441549f152ce0669f67001f0d401fb5a'
            'fe1901eb22210e7c3f23171197e9316c2a400d68e62d32b52c3900d1d30c38654c90cf101db483dc140103a1c36c2de28b28e6d8a135564c382b0d3e70d37549'
            'dc173703575c9e5f58444dd07507956dcac2704a3c7bc96ecdfeb38e31f663d07f81cefa1ce83360357141693ecf3d7b14dc8923d8b0da26709b8cfc92938107'
            'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e')

prepare() {
	cd "$srcdir"
	mkdir -p "$srcdir/ueyeethd"
	mkdir -p "$srcdir/ueyeusbd"
	sh "./ueyesdk-setup-${_version}-eth-amd64.gz.run" --noexec --target "$srcdir/ueyeethd"
	sh "./ueyesdk-setup-${_version}-usb-amd64.gz.run" --noexec --target "$srcdir/ueyeusbd"

	sed -i -e 's#/usr/local/share/ueye/bin/#/usr/bin/#' "$srcdir/ueyeethd/ueyeethdnotify"
}

__install_dir() {
	local source_dir="$1"
	local target_dir="$2"
	local mode="$3"

	for file in $(find "$source_dir" -type f); do
		install -m "$mode" -D "$file" "$target_dir/${file#${source_dir}/}"
	done
}

__install_subtree() {
	local subtree="$1"

	__install_dir "$subtree/bin64"        "$pkgdir/usr/bin"                 755
	__install_dir "$subtree/lib64"        "$pkgdir/usr/lib"                 755
	__install_dir "$subtree/include"      "$pkgdir/usr/include"             644
	__install_dir "$subtree/fw"           "$pkgdir/usr/share/ueye/fw"       644
}

package() {
	__install_subtree "$srcdir/ueyeethd"
	__install_subtree "$srcdir/ueyeusbd"
	__install_dir     "$srcdir/ueyeethd/doc"          "$pkgdir/usr/share/doc/ids"       644
	__install_dir     "$srcdir/ueyeethd/src/ueyedemo" "$pkgdir/usr/share/ueye/ueyedemo" 644

	cd "$srcdir"
	install -m 755 -D -T "$srcdir/ueyeethd/ueyeethdnotify" "$pkgdir/usr/bin/ueyeethdnotify"

	install -D -m 644 -t "$pkgdir/usr/lib/systemd/system" "$srcdir/ueyeethd.service"
	install -D -m 644 -t "$pkgdir/usr/lib/systemd/system" "$srcdir/ueyeusbd.service"
	install -D -m 644 -t "$pkgdir/usr/lib/udev/rules.d"   "$srcdir/ueyeusb.rules"
	install -D -m 644 -t "$pkgdir/etc/ueye"               "$srcdir/ueyeethd.conf"
	install -D -m 644 -t "$pkgdir/etc/ueye"               "$srcdir/ueyeusbd.conf"

	patchelf --remove-rpath "$pkgdir/usr/bin/idscameramanager"
	patchelf --remove-rpath "$pkgdir/usr/bin/setSEstarter"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyedemo"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyeethd"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyenotify"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyesetid"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyesetip"
	patchelf --remove-rpath "$pkgdir/usr/bin/ueyeusbd"
}
