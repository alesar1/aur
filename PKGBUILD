# Maintainer: tytan652 <tytan652 at tytanium dot xyz>

DISTRIB_ID=`lsb_release --id | cut -f2 -d$'\t'`

pkgname=obs-studio-tytan652
pkgver=27.2.4
pkgrel=6
pkgdesc="Free and open source software for video recording and live streaming. With everything except service integrations. Plus V4L2 devices by paths, my bind interface PR, and sometimes backported fixes"
arch=("i686" "x86_64" "aarch64")
url="https://github.com/obsproject/obs-studio"
license=("GPL3")
_mbedtlsver=2.28
_pythonver=3.10
depends=(
  "jack" "gtk-update-icon-cache" "x264" "rnnoise" "pciutils"

  # "libxinerama" "qt5-svg" provided by "vlc-luajit"
  # "libxkbcommon-x11" provided by "qt5-base"
  # "jansson" "curl" provided by "ftl-sdk"

  # Needed to use Qt on Wayland platform
  "qt5-wayland"

  # Both needed to load linux-capture, so those two are no longer optional
  "libxcomposite" "pipewire"

  # Needed to use PipeWire capture
  "xdg-desktop-portal"

  # Needed by obs-browser
  "libxss" "libxrandr" "nss" "at-spi2-atk"
         
  # AUR Packages
  "ffmpeg-obs>=5" "vlc-luajit" "ftl-sdk"
)
# To manage mbedtls rebuild easily, this will prevent you to rebuild OBS on non-updated system
# For Manjaro user this feature is disabled
# Also OBS will need a patch when mbedtls 3 is on the repo
if [[ $DISTRIB_ID == 'ManjaroLinux' ]]; then
  depends+=('mbedtls')
else
  depends+=("mbedtls>=$_mbedtlsver")
fi
## About vlc-luajit
# The official VLC package will make OBS crash when a VLC source is used.
# The issue is that VLC and OBS are compiled with different lua version.
# So I also created vlc-luajit, a VLC package compiled with the same lua as OBS.
# But to make people unable to install VLC official package with obs-studio-tytan652.
# I decided to make vlc-luajit a dependency of OBS rather than an optional one.
## About ffmpeg-obs
# Read ffmpeg-obs PKGBUILD for more info
makedepends=(
  "cmake" "git" "libfdk-aac" "swig" "luajit" "sndio" "lsb-release"

  # AUR Packages
  "libajantv2"
)
# To manage python rebuild easily, this will prevent you to rebuild OBS on non-updated system
# For Manjaro user this feature is disabled
if [[ $DISTRIB_ID == 'ManjaroLinux' ]]; then
  makedepends+=('python')
else
  makedepends+=("python>=$_pythonver")
fi
optdepends=(
  "libfdk-aac: FDK AAC codec support"
  "intel-media-driver: Hardware encoding (>= Broadwell)"
  "libva-intel-driver: Hardware encoding (<= Haswell)"
  "libva-mesa-driver: Hardware encoding"
  "swig: Scripting"
  "luajit: Lua scripting"
  "sndio: Sndio input client"
  "v4l2loopback-dkms: Virtual camera output"
  "libajantv2: AJA NTV 2 support"
)
# To manage python rebuild easily, this will prevent you to rebuild OBS on non-updated system
# For Manjaro user this feature is disabled
if [[ $DISTRIB_ID == 'ManjaroLinux' ]]; then
  optdepends+=("python: Python scripting")
else
  optdepends+=("python>=$_pythonver: Python scripting")
fi
provides=("obs-studio=$pkgver" "obs-vst")
conflicts=("obs-studio" "obs-vst")
options=('debug')
source=(
  "obs-studio::git+https://github.com/obsproject/obs-studio.git#tag=$pkgver"
  "obs-browser::git+https://github.com/obsproject/obs-browser.git"
  "obs-vst::git+https://github.com/obsproject/obs-vst.git"
  "bind_iface.patch" # Based on https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/4219.patch
  "v4l2_by-path.patch" # https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/3437.patch
)
sha256sums=(
  "SKIP"
  "SKIP"
  "SKIP"
  "4dc22cc6a71f879486946032debef5789b144d1d108a678379910480601937ca"
  "e0cfe383286ae1b7e9a4f88ea0e8f05e79470bf677b16ac18bd2a64826c2ae28"
)

if [[ $DISTRIB_ID == 'ManjaroLinux' ]]; then
source+=(
  "$pkgname.hook"
  "$pkgname.sh"
)
sha256sums+=(
  "486b8297a7cabccd552a4d49f994b231f87860d32d4535906abf776eee2a377b"
  "4fb9dcb408f9481127546db0c5287e1f1b274d14cf8975b0f02c1bafb23a4c37"
)
fi

if [[ $CARCH == 'x86_64' ]] || [[ $CARCH == 'i686' ]]; then
  optdepends+=("decklink: Blackmagic Design DeckLink support")
fi

if [[ $CARCH == 'x86_64' ]]; then
  makedepends+=("cef-minimal-obs=95.0.0_MediaHandler.2462+g95e19b8+chromium_95.0.4638.69_3")
  provides+=("obs-browser")
  conflicts+=("obs-linuxbrowser" "obs-browser")
  _browser=ON
else
  _browser=OFF
fi

prepare() {
  cd "$srcdir/obs-studio"
  git config submodule.plugins/obs-vst.url $srcdir/obs-vst
  git config submodule.plugins/obs-browser.url $srcdir/obs-browser
  git submodule update

  ## UI: Fix display affinity logic when re-applying (https://github.com/obsproject/obs-studio/commit/a8ecf3c8f2c2c28624a01249d3ec8b6435198009)
  git cherry-pick -n a8ecf3c8f2c2c28624a01249d3ec8b6435198009

  ## UI: Truncate displayed file paths in the middle in Remux window (https://github.com/obsproject/obs-studio/commit/2d75167e4c82207d0380512de4757521eeade0ba)
  git cherry-pick -n 2d75167e4c82207d0380512de4757521eeade0ba

  ## libobs: Fix image source not loading upper case file extensions (https://github.com/obsproject/obs-studio/commit/9903d73f36809c20795d5a918f2898fa6b8b88f8)
  git cherry-pick -n 9903d73f36809c20795d5a918f2898fa6b8b88f8

  ## linux-capture: Don't initialize format info if init_obs_pipewire fails (https://github.com/obsproject/obs-studio/commit/9903d73f36809c20795d5a918f2898fa6b8b88f8)
  sed -i '1438 a return NULL; }' plugins/linux-capture/pipewire.c
  sed -i '1437 a {' plugins/linux-capture/pipewire.c

  ## linux-pipewire: Version check call to pw_deinit (https://github.com/obsproject/obs-studio/commit/bf660b1d8dc1905527bb5919b1034c7b43c55dac)
  sed -i '74,77d' plugins/linux-capture/linux-capture.c

  ## libobs, UI: Fix --verbose logging for stdout (https://github.com/obsproject/obs-studio/commit/af67ef8e57fbf05e772f4cd6fcd3649e15689304)
  git cherry-pick -n af67ef8e57fbf05e772f4cd6fcd3649e15689304

  ## vlc-source: Fix surround sound not properly downmixed (https://github.com/obsproject/obs-studio/commit/5e4081e5637c7b6761ce54d5aef344fa85414e29)
  git cherry-pick -n 5e4081e5637c7b6761ce54d5aef344fa85414e29

  ## vlc-video: Fix video rotation and aspect ratio (https://github.com/obsproject/obs-studio/commit/59bdac1569304cd2112154b51fa5d25df61569cf)
  git cherry-pick -n 59bdac1569304cd2112154b51fa5d25df61569cf

  ## libobs-opengl: Use gl helpers in create_dmabuf_image (https://github.com/obsproject/obs-studio/commit/f695b14edc59e7c778566820988f9998df5190ba)
  git cherry-pick -n f695b14edc59e7c778566820988f9998df5190ba

  ## libobs,obs-outputs: Fix librtmp1 dependency interference on some linuxes (https://github.com/obsproject/obs-studio/pull/6377)
  sed -i 's/#define EXPORT/#define EXPORT __attribute__((visibility("default")))/g' libobs/util/c99defs.h

  ## obs-ffmpeg: Several fixes allowing support of FFmpeg 5 (https://github.com/obsproject/obs-studio/pull/6423)
  git cherry-pick -n e66542075d5d2cb51a14a0bdf3458ac10757de64
  git cherry-pick -n 5b6cc73c2475abe6a85647604b9ce937dec09000
  git cherry-pick -n 12d1f1c3358f7231244db0b971a333445e346f80

  ## obs-ffmpeg: Change types to avoid unnecessary casts (https://github.com/obsproject/obs-studio/commit/8bd4ef61a02f6f574d4788f2bc25bb9fe2568c5c)
  git cherry-pick -n 8bd4ef61a02f6f574d4788f2bc25bb9fe2568c5c

  ## Add network interface binding for RTMP on Linux (https://github.com/obsproject/obs-studio/pull/4219)
  patch -Np1 < "$srcdir/bind_iface.patch"

  ## linux-v4l2: Save device by path (https://github.com/obsproject/obs-studio/pull/3437)
  patch -Np1 < "$srcdir/v4l2_by-path.patch"
}

build() {
  cd obs-studio
  mkdir -p build; cd build

  cmake \
    -DCMAKE_BUILD_TYPE=RelWithDebInfo \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_BROWSER=$_browser \
    -DCEF_ROOT_DIR=/opt/cef-obs \
    -DOBS_VERSION_OVERRIDE="$pkgver-tytan652-$pkgrel" ..

  make
}

package() {
  cd obs-studio/build

  make install DESTDIR="$pkgdir"

  if [[ $DISTRIB_ID == 'ManjaroLinux' ]]; then
    install -D -m644 "$srcdir/$pkgname.hook" -t "${pkgdir}"/usr/share/libalpm/hooks/
    install -D -m755 "$srcdir/$pkgname.sh" -t "${pkgdir}"/usr/share/libalpm/scripts/
  fi
}
