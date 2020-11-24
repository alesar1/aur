#
# PKGBUILD file for package clapper
#
# Copyright (C) 2020  sp1rit
# Copyright (C) 2020  Rafostar
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

# Maintainer: sp1rit <sp1ritCS@protonmail.com>

pkgname=clapper-git
pkgver=r117.e7e9b9c
pkgrel=1
pkgdesc="A GNOME media player built using GJS and powered by GStreamer with OpenGL rendering. Can also be used as a pre-made widget for GTK apps."
arch=(any)
url="https://github.com/Rafostar/clapper"
license=("GPL-3.0")
depends=(
	"gtk3>=3.19.4"
	"hicolor-icon-theme"
	"gjs"
	"gst-plugins-base-libs"
	"gst-plugins-good"
	"gst-plugins-bad-libs>=1.16.0"
	"gst-plugin-gtk"
)
makedepends=(
	"meson>=0.50"
	"gjs"
	"git"
)
optdepends=(
	"gst-libav: Popular video decoders"
	"gstreamer-vaapi: Intel/AMD video acceleration"
)
source=("${pkgname%-git}::git+https://github.com/Rafostar/${pkgname%-git}.git#commit=e7e9b9c07d884c1d412b15f0069117ddc7d0e635")
provides=("${pkgname%-git}")
replaces=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
md5sums=("SKIP")

pkgver() {
	cd "$srcdir"/"${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"	
}

build() {
	cd "$srcdir"/"${pkgname%-git}"
	meson build/ --prefix=/usr
}

package() {
	cd "$srcdir"/"${pkgname%-git}"
	DESTDIR="$pkgdir" meson install -C build/
}
