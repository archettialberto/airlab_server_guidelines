#!/usr/bin/env bash
#SBATCH --job-name=cpu-example
#SBATCH --partition=cpu
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=4
#SBATCH --mem=8G
#SBATCH --time=12:00:00
#SBATCH --output=cpu-%j.out
set -euo pipefail
# Activate your environment. Replace preprocess.py with your application.
srun python preprocess.py
