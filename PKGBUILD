#Maintainer: kevall474 <kevall474@tuta.io> <https://github.com/kevall474>
pkgname=mesa-aco
pkgver=20.2.2
pkgrel=1
pkgdesc="Mesa stable release. ACO enable by default. More options are enable than the standard mesa package"
arch=(x86_64)
url="https://mesa3d.org/"
license=('MIT')
depends=("libdrm" "libelf" "libglvnd" "libomxil-bellagio" "libunwind" "libxdamage" "libxxf86vm" "llvm-libs"
	       "lm_sensors" "wayland" "zstd" "libxshmfence" "libclc" "expat" "vulkan-icd-loader")
makedepends=("bison" "flex" "valgrind" "meson" "ninja" "git" "ninjas2" "spirv-tools" "spirv-llvm-translator" "clang" "libxvmc"
            "python" "python-appdirs" "python-mako" "python-evdev" "elfutils" "glslang" "libva" "libepoxy" "libxv" "libvdpau"
            "libx11" "libxml2" "libxrandr"  "llvm" "libconfig" "gtk3" "wayland-protocols" "xorgproto" "patch" "libxv" "libxvmc"
            "libepoxy" "gtk3")
conflicts=("mesa-llvm" "mesa-llvm-rc" "mesa-aco-rc")
replaces=("mesa-llvm" "mesa-llvm-rc" "mesa-aco-rc")
source=("https://archive.mesa3d.org/mesa-${pkgver}.tar.xz"
        "LICENSE")
md5sums=("SKIP"
        "SKIP")

build() {
	cd mesa-${pkgver}

	# remove build dir if there is one
	echo "remove build dir if there is one"
	if dir build; then
	rm -rf build
	fi

	# create build dir
	echo "create build dir"
	mkdir build

	# build
	echo "build with meson"
	meson build/ \
	-Dplatforms=x11,wayland,drm,surfaceless \
	-Ddri3=enabled \
	-Ddri-drivers=i915,i965,r100,r200,nouveau \
	-Dgallium-drivers=r300,r600,radeonsi,nouveau,virgl,svga,swrast,iris,zink,freedreno,v3d,vc4,etnaviv,tegra,kmsro \
	-Dgallium-extra-hud=true \
	-Dgallium-vdpau=enabled \
	-Dgallium-xvmc=enabled \
	-Dgallium-omx=auto \
	-Dgallium-va=enabled \
	-Dgallium-xa=enabled \
	-Dgallium-nine=true \
	-Dgallium-opencl=standalone \
	-Dopencl-spirv=true \
	-Dvulkan-drivers=amd,intel \
	-Dshader-cache=enabled \
	-Dvulkan-overlay-layer=true \
	-Dvulkan-device-select-layer=true \
	-Dshared-glapi=enabled \
	-Dgles1=enabled \
	-Dgles2=enabled \
	-Dopengl=true \
	-Dgbm=enabled \
	-Dglx=auto \
	-Degl=enabled \
	-Dglvnd=false \
	-Dllvm=enabled \
	-Dshared-llvm=disabled \
	-Dvalgrind=enabled \
	-Dlibunwind=enabled \
	-Dlmsensors=enabled \
	-Dbuild-tests=true \
	-Dbuild-aco-tests=true \
	-Dselinux=false \
	-Dosmesa=gallium \
	-Dswr-arches=avx,avx2,knl,skx \
	-Dshared-swr=true \
	-Dtools=all \
	-Dpower8=enabled \
	-Dxlib-lease=enabled \
	-Dglx-direct=true \
	-Dzstd=enabled
}

package() {
	# compiling mesa and installing to "$pkgdir"
	echo "compiling mesa and installing to "$pkgdir""
	DESTDIR="$pkgdir" ninja $NINJAFLAGS -C mesa-${pkgver}/build/ install

	# installing licencse
	echo "installing license"
	install -dm755 "${pkgdir}"/usr/local/share/licenses/${pkgname}-${pkgver}/
	cp "${srcdir}"/LICENSE "${pkgdir}"/usr/local/share/licenses/${pkgname}-${pkgver}/
}
