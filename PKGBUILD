# Maintainer: Phil A. <flying-sheep@web.de>
# Maintainer: Florian Hülsmann <fh@cbix.de>
# Contributor: David Runge <dave@sleepmap.de>
# Contributor: Adrain Sinclair <adrian at adrusi dot com>
# Contributor: Miroslav Koškár <http://mkoskar.com/>

_name=Rack
pkgname=vcvrack
pkgver=2.1.0
pkgrel=2
pkgdesc='Open-source Eurorack modular synthesizer simulator'
url='https://vcvrack.com/'
license=(custom CCPL GPL3)
arch=(x86_64)
_plugin_name=Fundamental
_plugin_ver=$pkgver
_plugin_pkg=${pkgname}-${_plugin_name,,}
makedepends=(curl glew glfw-x11 jansson libarchive openssl rtaudio rtmidi speexdsp zstd gendesk jq)
provides=(libRack.so $_plugin_pkg)
conflicts=($_plugin_pkg)
groups=(pro-audio)
# use submodule_commits.sh to update this
_submodules=(filesystem fuzzysearchdatabase nanosvg nanovg osdialog oui-blendish pffft)
_commits=(7e37433 fe62479 25241c5 0bebdb3 21b9dcc 2fc6405 74d7261)
source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/VCVRack/${_name}/archive/v${pkgver}.tar.gz"
  'https://github.com/VCVRack/Rack/commit/ac73ef4.patch'
  "filesystem-${_commits[0]}.tar.gz::https://github.com/gulrak/filesystem/archive/${_commits[0]}.tar.gz"
  "fuzzysearchdatabase-${_commits[1]}.tar.gz::https://bitbucket.org/j_norberg/fuzzysearchdatabase/get/${_commits[1]}.tar.gz"
  "nanosvg-${_commits[2]}.tar.gz::https://github.com/memononen/nanosvg/archive/${_commits[2]}.tar.gz"
  "nanovg-${_commits[3]}.tar.gz::https://github.com/VCVRack/nanovg/archive/${_commits[3]}.tar.gz"
  "osdialog-${_commits[4]}.tar.gz::https://github.com/AndrewBelt/osdialog/archive/${_commits[4]}.tar.gz"
  "oui-blendish-${_commits[5]}.tar.gz::https://github.com/VCVRack/oui-blendish/archive/${_commits[5]}.tar.gz"
  "pffft-${_commits[6]}.tar.gz::https://bitbucket.org/jpommier/pffft/get/${_commits[6]}.tar.gz"
  "${_plugin_pkg}-${_plugin_ver}.tar.gz::https://github.com/VCVRack/${_plugin_name}/archive/v${_plugin_ver}.tar.gz"
  'plugins.patch'
  'vcvrack.sh'
  'profile.sh'
)
sha256sums=('c3a30105d673733698fca934a4287728c1eb49d76204f76d6e8152b4cc940594'
            'ad431dfed9655e5af202403ef9e61d4b68d0861b2fe5de5a724242cac0a3eef5'
            '15e1dacd2a52d7cf67afcc548cc92b218f88a2726488e50887922e86c1493f68'
            '31cb6aa73ab52347ea56f7eb47947bad154cee588a0780df18e9523975bfb971'
            'd957259360bf108858388bb01686a8cb0fc31d90db2d996ddf65575b37bb20d4'
            '043d67b2fd81d52b80c5db366292a8d1910a70abdf0b3cc7750bd8705cf5fb96'
            'da6c2b5cd661dd1875af867e02bac4dee4e2db7ea6ed3e8a7fd840223d7ce642'
            'f5c5a814b3302ac865ab648ec69f586b67cc0e9d2e51f77bcd4f495e75af6930'
            'ca077ad436bcb5ffe579ee886b8e61c87e2ebd81fc762be02a9ca07235e219ff'
            'a81220cd78a29b7897597860f6d9d4af21fc28a15873e14dff66eb7b0ca17f17'
            'b5b33ecb74123bd24029a7936d48d93c8be441dac8258c81f07c780a2efa692f'
            '21ac35c6ad4e5a29c32939b17baaf7ac1936077eda2214e28675eefcf2021db8'
            'e1da6ccf04bae3a2101151fec7ddd32e48ff92b0a1146b559fd3221c778d521f')
# extract the submodules ourselves so we have control over the unpacked top-level directory name
noextract=($(for _i in ${!_submodules[@]}; do \
  echo "${_submodules[$_i]}-${_commits[$_i]}.tar.gz"; done))

prepare() {
  cd "${_name}-$pkgver"
  echo noextract ${noextract[@]}
  # extract submodules
  for _i in ${!_submodules[@]}; do
    bsdtar -xf ../${_submodules[$_i]}-${_commits[$_i]}.tar.gz -C dep/${_submodules[$_i]} --strip-components 1
  done

  # add target to only build included dependencies
  echo 'includes: $(nanovg) $(nanosvg) $(osdialog) $(oui-blendish) $(fuzzysearchdatabase) $(ghcfilesystem) $(pffft)' >> dep/Makefile

  # revert recent changes to rtaudio.cpp that require an unreleased version of rtaudio
  patch -Rp1 -r - -i ../ac73ef4.patch || true

  # support building plugins and loading system-wide plugins
  patch -p1 -i ../plugins.patch

  gendesk -f -n \
    --pkgname $pkgname \
    --name "VCV Rack" \
    --exec Rack \
    --pkgdesc "$pkgdesc" \
    --genericname "Virtual modular synthesizer" \
    --categories "AudioVideo;Audio"
}

build() {
  cd "${_name}-$pkgver"
  _ldflags="-shared -ldl \
    $(pkg-config --libs glew \
    glfw3 jansson libcurl openssl \
    libarchive libzstd speexdsp \
    samplerate rtmidi rtaudio)"
  VERSION=$pkgver make -C dep includes
  VERSION=$pkgver make LDFLAGS+="$_ldflags" STANDALONE_LDFLAGS="$LDFLAGS"
  cd ../${_plugin_name}-$_plugin_ver
  VERSION=$_plugin_ver RACK_DIR=../${_name}-$pkgver make dist
}

package() {
  # Rack does not start with glfw-wayland
  depends=(libcurl.so libGLEW.so glfw-x11 jansson libarchive.so \
    openssl librtaudio.so librtmidi.so libsamplerate.so speexdsp zenity)
  cd "${_name}-$pkgver"
  install -vDm755 Rack -t "$pkgdir"/usr/lib/${pkgname}
  install -vDm755 libRack.so -t "$pkgdir"/usr/lib
  install -vDm755 "$srcdir"/vcvrack.sh "$pkgdir"/usr/bin/Rack
  install -vDm644 template.vcv Core.json cacert.pem -t "$pkgdir"/usr/lib/$pkgname

  # resources
  cp -dr --preserve=mode res -t "$pkgdir"/usr/lib/$pkgname

  # headers (required for plugins)
  for _path in {app,dsp,engine,plugin,simd,ui,widget,window}; do
    install -vDm644 include/${_path}/* \
      -t "$pkgdir"/usr/include/${pkgname}/${_path}/
  done
  install -vDm644 include/*.{h,hpp} -t "$pkgdir"/usr/include/${pkgname}/
  install -vDm644 dep/include/*.h -t "$pkgdir"/usr/include/${pkgname}/dep
  # Makefile snippets required for plugins
  install -vDm644 {arch,compile,dep,plugin}.mk -t "$pkgdir"/usr/share/$pkgname

  # xdg desktop integration
  install -vDm644 ${pkgname}.desktop -t "$pkgdir"/usr/share/applications/
  install -vDm644 res/icon.png "$pkgdir"/usr/share/pixmaps/${pkgname}.png
  # licenses
  install -vDm644 LICENSE.md -t "$pkgdir"/usr/share/licenses/$pkgname

  # Fundamental plugin
  cd ../${_plugin_name}-$_plugin_ver
  install -d "$pkgdir"/usr/lib/${pkgname}/plugins
  cp -a dist/$_plugin_name -t "$pkgdir"/usr/lib/${pkgname}/plugins/

  # RACK_DIR environment variable
  install -vDm644 "$srcdir"/profile.sh "$pkgdir"/etc/profile.d/vcvrack.sh
}
