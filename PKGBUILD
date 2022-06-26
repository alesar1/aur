# Maintainer: Giovanni Bottaro <giovanni26.bottaro@gmail.com>

_electron_version=16

pkgname=trilium
pkgver=0.52.3
pkgrel=2
pkgdesc="A hierarchical note taking application with focus on building large personal knowledge bases."
arch=('x86_64')
url="https://github.com/zadam/trilium"
license=('AGPL3')
depends=("electron$_electron_version")
makedepends=('npm')
source=("$pkgname-$pkgver.tar.gz::https://github.com/zadam/trilium/archive/refs/tags/v$pkgver.tar.gz"
	"copy-trilium.sh.patch"
	"config-sample.ini.patch"
        "trilium.sh"
	"trilium.desktop")
sha512sums=('b19559bc8ae8c3b97c0fac18be66495996537d15bb8e058ab6d8688fe05b996efb40246fed1653a49c5eb296b5f7ee6f46e86ca306226088fb2e5718de18cb7f'
	    '97dc8034f01cecceb4a85e61a0d561ddf01af7cf24e0dad24faefaee8c1f265c5e8441fd38ff473bd869606b821476d4efc8fc5ae1b99149875d826db4366fa7'
	    'b073a15731cced053d34534a7c34ce39b6b54bc9c818e1792d6d5fe0ef86ba83f255b75fd7a630dedad2ec0f51403dc68969d1fa3dab7472a2fc628d83c16bdd'
	    '1357b45f2e9ed95d7b26a7ae69c94c42bbe46c25f4aa12e39b2712cd6db8990d26eecc1f26f8341f4accb62e88b9a535eb743b3ac3d30f280699ae946e697cd9'
	    'b0e42a91b5990e5d919277eb3039df52f8177f199946eeb631464b6c2a0941000df8d698907482992a11a890a495b8e0447180ab653445f4130e945f562d1054')

prepare() {
	cd "$pkgname-$pkgver"

	sed -i "s|@electronversion@|$_electron_version|" ../trilium.sh

	patch bin/copy-trilium.sh ../copy-trilium.sh.patch
	patch config-sample.ini ../config-sample.ini.patch
}

build() {
	cd "$pkgname-$pkgver"

	export npm_config_cache="$srcdir/npm_cache"
	export ELECTRON_SKIP_BINARY_DOWNLOAD=1
	npm install --build-from-source
	
	_trilium_src_dir=./dist/trilium-linux-x64-src
	./bin/copy-trilium.sh $_trilium_src_dir

	rm -r $_trilium_src_dir/src/public/app-dist/*.mobile.*
	
	npx electron-builder --linux --x64 --dir \
	    --project=$_trilium_src_dir \
	    -c.electronDist=/usr/lib/electron$_electron_version \
	    -c.electronVersion=$(electron$_electron_version --version | tail -c +2)
}

package() {
	cd "$pkgname-$pkgver"

	_trilium_final_build_dir=dist/trilium-linux-x64-src/dist/linux-unpacked
	install -vDm644 $_trilium_final_build_dir/resources/app.asar -t "${pkgdir}/usr/lib/${pkgname}"
	install -vDm644 package.json -t "${pkgdir}/usr/lib/${pkgname}"
	install -vDm644 bin/tpl/anonymize-database.sql -t "${pkgdir}/usr/lib/${pkgname}"

	for i in 16 32 64 128 256 512; do
		install -vDm644 images/app-icons/png/${i}x${i}.png "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png"
	done

	install -vDm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/trilium"
	install -vDm644 "${srcdir}"/${pkgname}.desktop -t "${pkgdir}"/usr/share/applications
}
