# Maintainer: Norbert Pfeiler <norbert.pfeiler ät gmail.com>
# Contributor: Christian Assfalg <ch.assfalg_at_gmx_dot_de>
# Patch by Jan Holthuis
# Also Maintainers and Contributors of the ›mutter‹ package, this package is based on

_realname=mutter
pkgname=$_realname-catalyst
pkgver=3.32.0
pkgrel=1
pkgdesc="A window manager for GNOME with patches for catalyst compatibility"
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=('GPL')
depends=('dconf'
  'gobject-introspection-runtime'
  'gsettings-desktop-schemas'
  'libcanberra'
  'startup-notification'
  'zenity'
  'libsm'
  "gnome-desktop" # >=1:${pkgver:0:6}" # don’t build with outdated libraries
  'upower'
  'libxkbcommon-x11'
  'gnome-settings-daemon'
  'libgudev'
  'libinput'
  'pipewire'
  'xorg-server-xwayland'
)
makedepends=('intltool'
  'gobject-introspection'
  'git'
  'egl-wayland'
  'meson'
  'xorg-server'
)
checkdepends=('xorg-server-xvfb')
conflicts=('mutter' "gnome-shell>1:${pkgver:0:6}+999")
provides=("mutter=${pkgver}")
groups=('gnome')
_commit=efb1ee97308653a28ed4448b0c405e6faf2c4f40  # tags/3.32.0^0
source=("git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
        216.patch
        "catalyst-workaround-v2.patch"
        "catalyst mutter cogl.patch")
sha256sums=('SKIP'
            'ed4f3cf738a3cffdf8a6e1a352bf24d74078c3b26fb9262c5746e0d95b9df756'
            '2564846288ea55262d681d38f7e43609c63e94990df1cb0a6b99e16e2c073d14'
            '55079a9daddedc22d9fe4dcfe2e87607345dfafb370f8e7fb6a98c0acae3348a')

pkgver() {
  cd "$_realname"
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd "$_realname"

  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/216
  git apply -3 ../216.patch

  # https://bugzilla.gnome.org/show_bug.cgi?id=741581
  echo "Skipping call to output_set_presentation_xrandr to fix issue with catalyst"
  git apply -3 "${srcdir}/catalyst-workaround-v2.patch"
  # https://bugzilla.gnome.org/show_bug.cgi?id=756306
  echo "workaround compatibility shaders used in fw compat ctx in cogl"
  git apply -3 "${srcdir}/catalyst mutter cogl.patch"
  echo "Patches applied"
}

build() {
  arch-meson $_realname build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D installed_tests=false
  ninja -C build
}

check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/build/data}"
  export XDG_RUNTIME_DIR GSETTINGS_SCHEMA_DIR

  dbus-run-session xvfb-run -s '+iglx -noreset' meson test -C build
)

package() {
  DESTDIR="$pkgdir" meson install -C build
}
