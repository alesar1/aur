# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: ava1ar <mail(at)ava1ar(dot)me>
# Contributor: Corey Hinshaw <corey(at)electrickite(dot)org>
pkgname=system76-driver
pkgver=20.04.41
pkgrel=2
pkgdesc="Universal driver for System76 computers"
arch=('any')
url="https://github.com/pop-os/system76-driver"
license=('GPL')
depends=(
  'at'
  'dmidecode'
  'ethtool'
  'gtk3'
  'lm_sensors'
  'pciutils'
  'polkit'
  'python>=3.6'
  'python-cffi'
  'python-dbus'
  'python-distro'
  'python-evdev'
  'python-gobject'
  'python-pynacl'
  'python-systemd'
  'python-xlib'
  'system76-firmware-daemon'
  'usbutils'
  'wireless_tools')
makepdepends=(
  'python-pyflakes')
optdepends=(
  'firmware-manager: Manage System76 firmware updates via standalone application'
  'gnome-control-center-system76: Manage System76 firmware updates via Settings'
  'grub: Required to apply kernel parameters'
  'pm-utils: For power management features'
  'pulseaudio: To apply microphone fix'
  'system76-dkms: Control hotkeys and fan on certain System76 laptops'
  'system76-acpi-dkms: Provides the system76_acpi in-tree driver'
  'system76-io-dkms: Enable System76 I/O daughterboard'
  'system76-oled: Control brightness on OLED displays'
  'system76-power: System76 Power Management'
  'xorg-xhost: To enable GUI applications on Wayland'
  'xorg-xbacklight: To use the backlight service')
install="$pkgname.install"
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/pop-os/system76-driver/archive/$pkgver.tar.gz"
  'cli.patch'
  'wayland.patch'
  'actions.patch')
sha256sums=('38abb56049575e4a771133eafab09d6f62634da24c15254eb0291e9688695e9f'
            'ef027346c439561dc01f906ae7bd961100aedf9125fd86bb0eb89a87b683fdc3'
            '2ffbd813744c0b99416947a2755767767af434758aa20dcfafefb49fb367d5d3'
            '3ade740c1681f8f33ef78e1e6c087e4002d14c888d7a5bf6bfbeb2aa70111119')


prepare() {
  cd "$pkgname-$pkgver"

  # patch for cli version - enable override vendor/model via /etc/system76-daemon.json
  patch --no-backup-if-mismatch -Np1 -i $srcdir/cli.patch

  # Use xhost for GUI apps on Wayland
  patch --no-backup-if-mismatch -Np1 -i $srcdir/wayland.patch

  # Use mkinitcpio instead of initramfs-tools
  patch --no-backup-if-mismatch -Np1 -i $srcdir/actions.patch
}

build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$pkgver"

  # Install base package
  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1 --skip-build

  # Install daemons and executables
  install -Dm755 system76-daemon -t "$pkgdir/usr/lib/$pkgname"
  install -m755 system76-user-daemon -t "$pkgdir/usr/lib/$pkgname"
  install -Dm755 system76-driver-pkexec -t "$pkgdir/usr/bin"

  # Install systemd unit files
  # Note: system76-driver* service files shortened to system76*
  install -Dm644 debian/system76-driver.service \
    "$pkgdir/usr/lib/systemd/system/system76.service"

  # Install scripts and configuration
  install -m755 system76-nm-restart "$pkgdir/usr/lib/$pkgname"
  install -m755 system76-thunderbolt-reload -t "$pkgdir/usr/lib/$pkgname"
  install -Dm644 com.system76.pkexec.system76-driver.policy -t \
    "$pkgdir/usr/share/polkit-1/actions"

  # Install application launchers
  install -Dm644 system76-user-daemon.desktop -t "$pkgdir/etc/xdg/autostart"

  # Create /var/lib/system76-driver directory for brightness settings saving
  install -d "$pkgdir/var/lib/$pkgname"

  # Remove tests
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  rm -rf "$pkgdir$site_packages/system76driver/tests"
}
