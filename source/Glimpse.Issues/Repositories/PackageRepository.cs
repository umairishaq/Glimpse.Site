﻿using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace Glimpse.Infrastructure.Repositories
{
    public class PackageRepository : IPackageRepository
    {
        private readonly string _jsonFile;

        public PackageRepository(string jsonFile)
        {
            _jsonFile = jsonFile;
        }

        public virtual IEnumerable<GlimpsePackage> GetAllPackages()
        {
            var packagesFile = File.ReadAllText(_jsonFile);
            var packages = JsonConvert.DeserializeObject<IEnumerable<GlimpsePackage>>(packagesFile);
            return packages;
        }
    }
}