# Maintainer: tytan652 <tytan652 at tytanium dot xyz>

# Scene and source drag & drop was disabled due to this issue
# (https://github.com/obsproject/obs-studio/issues/4488)
# You can take the risk to re-enable it by changing the following variable to 1
# THIS IS AT YOUR OWN RISK
REENABLE_DRAGDROP=0

pkgname=obs-studio-tytan652
pkgver=27.0.1
pkgrel=3
pkgdesc="Free and open source software for video recording and live streaming. With Browser dock and sources, VST 2 filter, FTL protocol, working VLC sources and my bind interface and GNOME entry PRs."
arch=("i686" "x86_64" "aarch64")
url="https://github.com/obsproject/obs-studio"
license=("GPL2")
depends=("ffmpeg" "mbedtls" "jack" "gtk-update-icon-cache" "x264" "rnnoise"

         # "libxinerama" "qt5-svg" provided by "vlc-luajit"
         # "libxkbcommon-x11" provided by "qt5-base"
         # "jansson" "curl" provided by "ftl-sdk"

         # Both needed to load linux-capture, so those two are no longer optional
         "libxcomposite" "pipewire"
         # Needed to use PipeWire capture
         "xdg-desktop-portal"

         # Needed by obs-browser
         "libxss" "libxrandr" "nss" "at-spi2-atk"
         
         # AUR Packages
         "vlc-luajit" "ftl-sdk")
# The official VLC package will make OBS crash when a VLC source is used.
# The issue is that VLC and OBS are compiled with different lua version.
# So I also created vlc-luajit, a VLC package compiled with the same lua as OBS.
# But to make people unable to install VLC official package with obs-studio-tytan652.
# I decided to make vlc-luajit a dependency of OBS rather than an optional one.
makedepends=("cmake" "git" "libfdk-aac" "swig" "luajit" "python"
             "sndio"
             # AUR Packages
             "cef-minimal-obs=87.1.14")
optdepends=(
            "libfdk-aac: FDK AAC codec support"
            "intel-media-driver: Hardware encoding (>= Broadwell)"
            "libva-intel-driver: Hardware encoding (<= Haswell)"
            "libva-mesa-driver: Hardware encoding"
            "swig: Scripting"
            "luajit: Lua scripting"
            "python: Python scripting"
            "sndio: Sndio input client"
            "v4l2loopback-dkms: Virtual camera output"
)
provides=("obs-studio=$pkgver")
conflicts=("obs-studio" "obs-linuxbrowser")
source=(
        "obs-studio::git+https://github.com/obsproject/obs-studio.git#tag=$pkgver"
        "python_fix.patch" # https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/3335.patch
        "bind_iface.patch" # Based on https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/4219.patch
        "update_desktop_entries.patch" # Based on https://patch-diff.githubusercontent.com/raw/obsproject/obs-studio/pull/4496.patch
        "obs-browser::git+https://github.com/obsproject/obs-browser.git"
        "obs-vst::git+https://github.com/obsproject/obs-vst.git#commit=cca219fa3613dbc65de676ab7ba29e76865fa6f8"
)
sha256sums=(
        "SKIP"
        "430d7d0a7e1006c1f6309ad7d4912033dadd542b641f9d41259a5bad568379c9"
        "a43f2ad974104888ef36eef49b3e60dc26f7cfc0f48300726c861978ae5ae3ea"
        "9dedcb1996794754f5e36c0c69b36abc5a2c3e6514f4556dc5b867cec2ec9731"
        "SKIP"
        "SKIP"
)

prepare() {
  cd "$srcdir/obs-studio"
  git config submodule.plugins/obs-vst.url $srcdir/obs-vst
  git config submodule.plugins/obs-browser.url $srcdir/obs-browser
  git submodule update

  if [ "$REENABLE_DRAGDROP" = 1 ]; then
    git revert 457adcedd --no-edit
  fi

  ## libobs/util: Fix loading Python binary modules on *nix (https://github.com/obsproject/obs-studio/pull/3335)
  patch -Np1 < "$srcdir/python_fix.patch"

  ## Add network interface binding for RTMP on Linux (https://github.com/obsproject/obs-studio/pull/4219)
  patch -Np1 < "$srcdir/bind_iface.patch"
  # Add translation
  echo -e "\r\n# Bind Network Interface PR translation" >> "$srcdir/obs-studio"/UI/data/locale/en-US.ini
  echo "Basic.Settings.Advanced.Network.BindToInterface=\"Bind to interface\"" >> "$srcdir/obs-studio"/UI/data/locale/en-US.ini

  ## xdg-data: Add a custom desktop entry for Gnome Shell, Phosh and maybe more (https://github.com/obsproject/obs-studio/pull/4496)
  patch -Np1 < "$srcdir/update_desktop_entries.patch"
  # Creating the GNOME entry based on the non-GNOME one
  cp "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.desktop "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
  sed -i 's/NotShowIn=GNOME/OnlyShowIn=GNOME/g' "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
  sed -i 's/Actions=new-window;/Actions=new-window;new-wayland-window;/g' "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
  echo -e "\n[Desktop Action new-wayland-window]" >> "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
  echo "Name=New Wayland Instance" >> "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
  echo "Exec=obs -platform wayland" >> "$srcdir/obs-studio"/UI/xdg-data/com.obsproject.Studio.Gnome.desktop
}

build() {
  cd obs-studio
  mkdir -p build; cd build

  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DBUILD_BROWSER=ON \
    -DCEF_ROOT_DIR=/opt/cef-obs \
    -DOBS_VERSION_OVERRIDE="$pkgver-tytan652-$pkgrel" ..

  make
}

package() {
  cd obs-studio/build

  make install DESTDIR="$pkgdir"
}

# vim: ts=2:sw=2:expandtab
